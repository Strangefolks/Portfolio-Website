const ABOUT_SLIDE_DURATION_MS = 560;
const ABOUT_SLIDE_STAGGER_MS = 110;
const ABOUT_LOGO_VISUAL_TOP_RATIO = 5.92725 / 44;
const ABOUT_STORY_TITLE_FIT_MIN = 12;

let aboutOverlayBusy = false;
let aboutOverlayScrollTop = 0;
let aboutStoryTitleLastFitWidth = -1;
let aboutStoryTitleLastFitText = '';
let aboutStoryTitleFitObserver;
let aboutStoryTitleFitObservedWidth = -1;
let aboutStoryLayoutObserver;
let aboutStoryTitleFitScope = document;
let aboutStoryTitleFitResizeBound = false;
let aboutStoryTitleFitGeneration = 0;

async function loadAboutPanel(targetId, url, scope = document) {
  const target =
    scope === document
      ? document.getElementById(targetId)
      : scope.querySelector(`#${targetId}`);
  if (!target || target.dataset.staticContent === 'true') return;

  const response = await fetch(url);
  if (!response.ok) return;

  const markup = await response.text();
  target.innerHTML = markup;

  const svg = target.querySelector('svg');
  if (svg) {
    svg.classList.add('about-panel-svg');
    svg.removeAttribute('aria-hidden');
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function flushLayout(element) {
  void (element || document.body).offsetHeight;
}

function setAboutEnterPending(host) {
  host.classList.remove('is-about-exiting', 'is-about-entering');
  host.classList.add('is-about-enter-pending');
}

function clearInlineAboutLayerTransforms() {
  document.querySelectorAll('.about-layer').forEach((layer) => {
    layer.style.removeProperty('transform');
    layer.style.removeProperty('transition');
  });
}

async function playAboutEnter(host) {
  clearInlineAboutLayerTransforms();
  setAboutEnterPending(host);
  flushLayout();

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.remove('is-about-enter-pending');
        host.classList.add('is-about-entering');
        resolve();
      });
    });
  });

  await wait(ABOUT_SLIDE_DURATION_MS + 40);
  host.classList.remove('is-about-entering');
}

async function playAboutExit(host, { resetPending = true } = {}) {
  host.classList.remove('is-about-enter-pending', 'is-about-entering');
  clearInlineAboutLayerTransforms();
  flushLayout();

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.add('is-about-exiting');
        resolve();
      });
    });
  });

  await wait(ABOUT_SLIDE_DURATION_MS + 40);
  host.classList.remove('is-about-exiting');
  if (resetPending) setAboutEnterPending(host);
}

function getAboutScrollContainer() {
  return document.getElementById('main-content');
}

function lockAboutOverlayScroll() {
  const main = getAboutScrollContainer();
  if (main) aboutOverlayScrollTop = main.scrollTop;
  document.body.classList.add('is-about-open');
}

function unlockAboutOverlayScroll() {
  document.body.classList.remove('is-about-open');
  const main = getAboutScrollContainer();
  if (!main) return;

  requestAnimationFrame(() => {
    main.scrollTop = aboutOverlayScrollTop;
  });
}

function getAboutStoryTitleEl(scope = aboutStoryTitleFitScope) {
  return scope.querySelector('.about-story-title');
}

function getAboutStoryTitleFitWidth(scope = aboutStoryTitleFitScope) {
  const titleBlock = scope.querySelector('.about-story-title-block');
  return titleBlock?.clientWidth ?? 0;
}

function measureAboutStoryTitleWidth(title, fontSizePx) {
  title.style.maxWidth = 'none';
  title.style.fontSize = `${fontSizePx}px`;
  return title.getBoundingClientRect().width;
}

function fitAboutStoryTitle(scope = aboutStoryTitleFitScope, { force = false } = {}) {
  const title = getAboutStoryTitleEl(scope);
  if (!title) return;

  const generation = ++aboutStoryTitleFitGeneration;
  const availableWidth = Math.round(getAboutStoryTitleFitWidth(scope));
  const text = title.textContent.trim();
  if (availableWidth <= 0 || !text) return;
  if (!force && availableWidth === aboutStoryTitleLastFitWidth && text === aboutStoryTitleLastFitText) {
    return;
  }

  let min = ABOUT_STORY_TITLE_FIT_MIN;
  let max = Math.max(ABOUT_STORY_TITLE_FIT_MIN, availableWidth);
  let best = min;

  while (min <= max) {
    if (generation !== aboutStoryTitleFitGeneration) return;

    const mid = Math.floor((min + max) / 2);
    const width = measureAboutStoryTitleWidth(title, mid);
    if (Math.ceil(width) <= availableWidth) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  if (generation !== aboutStoryTitleFitGeneration) return;

  let fittedSize = best;
  while (
    fittedSize > ABOUT_STORY_TITLE_FIT_MIN
    && Math.ceil(measureAboutStoryTitleWidth(title, fittedSize)) > availableWidth
  ) {
    fittedSize -= 1;
  }

  if (generation !== aboutStoryTitleFitGeneration) return;

  title.style.fontSize = `${fittedSize}px`;
  title.style.maxWidth = 'none';
  aboutStoryTitleLastFitWidth = availableWidth;
  aboutStoryTitleLastFitText = text;
}

function getAboutStoryTitleCapTop(title) {
  if (!title) return 0;

  const textNode = title.firstChild;
  if (textNode?.nodeType === Node.TEXT_NODE && textNode.textContent.length > 0) {
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 1);
    const rect = range.getBoundingClientRect();
    if (rect.height > 0) return rect.top;
  }

  return title.getBoundingClientRect().top;
}

function getAboutLogoVisualTop(logo) {
  const rect = logo.getBoundingClientRect();
  return rect.top + rect.height * ABOUT_LOGO_VISUAL_TOP_RATIO;
}

function isAboutTransitioning(host = document.body) {
  return (
    host.classList.contains('is-about-enter-pending')
    || host.classList.contains('is-about-entering')
    || host.classList.contains('is-about-exiting')
  );
}

function alignAboutStoryWithLogo(scope = aboutStoryTitleFitScope) {
  const projectText = scope.querySelector('.about-panel-right .project-text');
  if (!projectText) return;

  if (window.innerWidth <= 900) {
    projectText.style.paddingTop = '';
    return;
  }

  if (isAboutTransitioning()) {
    return;
  }

  const logo = scope.querySelector('.about-logo-mark');
  const title = getAboutStoryTitleEl(scope);
  if (!logo || !title) return;

  projectText.style.paddingTop = '0px';
  flushLayout(scope.querySelector?.('.about-layout') || scope);

  const capTop = getAboutStoryTitleCapTop(title);
  const logoVisualTop = getAboutLogoVisualTop(logo);
  const paddingTop = Math.round(logoVisualTop - capTop);

  if (paddingTop < 0) return;

  projectText.style.paddingTop = `${paddingTop}px`;
}

function applyAboutStoryTitleFit(scope = aboutStoryTitleFitScope, { force = true } = {}) {
  aboutStoryTitleFitScope = scope;
  fitAboutStoryTitle(scope, { force });
  flushLayout(scope.querySelector?.('.about-layout') || scope);
}

function applyAboutStoryLayout(scope = aboutStoryTitleFitScope, { force = true } = {}) {
  applyAboutStoryTitleFit(scope, { force });
  alignAboutStoryWithLogo(scope);
}

function canApplyAboutStoryLayout(scope = aboutStoryTitleFitScope) {
  return getAboutStoryTitleFitWidth(scope) > 0;
}

async function prepareAboutStoryLayout(scope = document) {
  aboutStoryTitleFitScope = scope;
  document.body.classList.add('is-about-story-layout-pending', 'is-about-layout-measuring');

  const applyLayout = () => {
    if (!canApplyAboutStoryLayout(scope)) return false;
    aboutStoryTitleLastFitWidth = -1;
    aboutStoryTitleLastFitText = '';
    applyAboutStoryTitleFit(scope, { force: true });
    alignAboutStoryWithLogo(scope);
    return true;
  };

  try {
    applyLayout();

    if (document.fonts?.ready) {
      await document.fonts.ready;
      applyLayout();
    }

    const barlowCondensedLoad = document.fonts?.load?.('800 16px "Barlow Condensed"');
    if (barlowCondensedLoad) {
      try {
        await barlowCondensedLoad;
      } catch {
        // Font loading can fail quietly; refit with whatever is available.
      }
      applyLayout();
    }

    await new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          applyLayout();
          resolve();
        });
      });
    });
  } finally {
    document.body.classList.remove('is-about-layout-measuring');
  }

  document.body.classList.remove('is-about-story-layout-pending');
}

function scheduleAboutStoryTitleFit({ force = false } = {}) {
  if (isAboutTransitioning()) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (isAboutTransitioning()) return;
      fitAboutStoryTitle(aboutStoryTitleFitScope, { force });
      alignAboutStoryWithLogo(aboutStoryTitleFitScope);
    });
  });
}

function refitAboutStoryTitle(scope = aboutStoryTitleFitScope) {
  if (isAboutTransitioning()) return;

  aboutStoryTitleLastFitWidth = -1;
  aboutStoryTitleLastFitText = '';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (isAboutTransitioning()) return;
      fitAboutStoryTitle(scope);
      alignAboutStoryWithLogo(scope);
    });
  });
}

function initAboutStoryLayoutObservers(scope = document) {
  aboutStoryTitleFitScope = scope;

  if (aboutStoryTitleFitObserver) {
    aboutStoryTitleFitObserver.disconnect();
    aboutStoryTitleFitObserver = undefined;
  }

  if (aboutStoryLayoutObserver) {
    aboutStoryLayoutObserver.disconnect();
    aboutStoryLayoutObserver = undefined;
  }

  const fitWidthSource =
    scope.querySelector('.about-story-title-block') ||
    scope.querySelector('.about-panel-right .project-text') ||
    scope.querySelector('.about-panel-right');

  if (fitWidthSource && typeof ResizeObserver !== 'undefined') {
    aboutStoryTitleFitObservedWidth = -1;
    aboutStoryTitleFitObserver = new ResizeObserver((entries) => {
      let widthChanged = false;

      for (const entry of entries) {
        const width = Math.round(entry.contentRect.width);
        if (width <= 0) continue;
        if (width !== aboutStoryTitleFitObservedWidth) {
          aboutStoryTitleFitObservedWidth = width;
          widthChanged = true;
        }
      }

      if (widthChanged) scheduleAboutStoryTitleFit();
    });
    aboutStoryTitleFitObserver.observe(fitWidthSource);
  }

  const layoutSource = scope.querySelector('.about-layout');
  if (layoutSource && typeof ResizeObserver !== 'undefined') {
    aboutStoryLayoutObserver = new ResizeObserver(() => {
      scheduleAboutStoryTitleFit();
    });
    aboutStoryLayoutObserver.observe(layoutSource);
  }

  if (!aboutStoryTitleFitResizeBound) {
    aboutStoryTitleFitResizeBound = true;
    window.addEventListener('resize', () => scheduleAboutStoryTitleFit());
  }
}

function bindAboutClose(layout, host, onClose) {
  const closeButton = layout.querySelector('.about-close');
  if (!closeButton || closeButton.dataset.aboutCloseBound === 'true') return;

  closeButton.dataset.aboutCloseBound = 'true';
  closeButton.addEventListener('click', async (event) => {
    event.preventDefault();
    if (aboutOverlayBusy || host.classList.contains('is-about-exiting')) return;

    aboutOverlayBusy = true;
    try {
      await playAboutExit(host, { resetPending: false });
      onClose();
    } finally {
      aboutOverlayBusy = false;
    }
  });
}

async function mountAboutLayout(stage) {
  const response = await fetch('about.html');
  if (!response.ok) return null;

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const aboutApp = doc.querySelector('.app--about');
  if (!aboutApp) return null;

  stage.innerHTML = '';
  stage.appendChild(aboutApp);

  const layout = stage.querySelector('.about-layout');
  if (!layout) return null;

  setAboutEnterPending(document.body);
  return layout;
}

function hideAboutOverlay(stage) {
  stage.hidden = true;
  stage.setAttribute('aria-hidden', 'true');
  setAboutEnterPending(document.body);
  unlockAboutOverlayScroll();
}

async function ensureAboutMounted(stage) {
  const existingLayout = stage.querySelector('.about-layout');
  if (existingLayout) return existingLayout;

  const layout = await mountAboutLayout(stage);
  if (!layout) return null;

  bindAboutClose(layout, document.body, () => {
    hideAboutOverlay(stage);
  });

  return layout;
}

async function openAboutOverlay() {
  const stage = document.getElementById('about-stage');
  if (
    !stage ||
    aboutOverlayBusy ||
    document.body.classList.contains('is-about-open') ||
    document.body.classList.contains('is-about-exiting') ||
    document.body.classList.contains('is-profile-open') ||
    document.body.classList.contains('is-profile-exiting')
  ) {
    return;
  }

  aboutOverlayBusy = true;

  try {
    const layout = await ensureAboutMounted(stage);
    if (!layout) return;

    stage.hidden = false;
    stage.setAttribute('aria-hidden', 'false');
    flushLayout(stage);

    await prepareAboutStoryLayout(stage);
    initAboutStoryLayoutObservers(stage);

    setAboutEnterPending(document.body);
    flushLayout(stage);

    lockAboutOverlayScroll();
    initCustomScrollbars(stage);
    await playAboutEnter(document.body);
    applyAboutStoryLayout(stage, { force: true });
  } finally {
    aboutOverlayBusy = false;
  }
}

function initAboutPage() {
  const layout = document.querySelector('.about-layout');
  if (!layout) return;

  bindAboutClose(layout, document.body, () => {
    window.location.href = 'home.html';
  });

  void (async () => {
    await prepareAboutStoryLayout(document);
    initAboutStoryLayoutObservers(document);
    initCustomScrollbars();
    await playAboutEnter(document.body);
    applyAboutStoryLayout(document, { force: true });
  })();
}

async function initAboutOverlay() {
  const stage = document.getElementById('about-stage');
  const logoLink = document.querySelector('a.logo[href="about.html"]');
  if (!stage || !logoLink) return;

  logoLink.addEventListener('click', (event) => {
    event.preventDefault();
    void openAboutOverlay();
  });

  await ensureAboutMounted(stage);
}

if (document.body.classList.contains('about-page')) {
  initAboutPage();
  if (typeof initCustomCursor === 'function') {
    initCustomCursor();
  }
} else {
  void initAboutOverlay();
}
