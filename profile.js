const PROFILE_SLIDE_DURATION_MS = 560;
const PROFILE_SLIDE_STAGGER_MS = 110;
const PROFILE_NAME_FIT_MIN = 12;

let profileOverlayBusy = false;
let profileOverlayScrollTop = 0;
let profileNameFitResizeBound = false;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function flushLayout(element) {
  void (element || document.body).offsetHeight;
}

function refreshProfileBurstArt(scope = document) {
  const burstImg = scope.querySelector('.profile-burst-art');
  if (!burstImg) return;

  const baseSrc =
    burstImg.getAttribute('src')?.split('?')[0] ?? 'assets/about%20page%20large%20burst.svg';
  burstImg.src = `${baseSrc}?v=${Date.now()}`;
}

function setProfileEnterPending(host) {
  host.classList.remove('is-profile-exiting', 'is-profile-entering');
  host.classList.add('is-profile-enter-pending');
}

function clearInlineProfileLayerTransforms() {
  document.querySelectorAll('.profile-layer').forEach((layer) => {
    layer.style.removeProperty('transform');
    layer.style.removeProperty('transition');
  });
}

async function playProfileEnter(host) {
  clearInlineProfileLayerTransforms();
  setProfileEnterPending(host);
  flushLayout();

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.remove('is-profile-enter-pending');
        host.classList.add('is-profile-entering');
        resolve();
      });
    });
  });

  await wait(PROFILE_SLIDE_DURATION_MS + 40);
  host.classList.remove('is-profile-entering');
}

async function playProfileExit(host, { resetPending = true } = {}) {
  host.classList.remove('is-profile-enter-pending', 'is-profile-entering');
  clearInlineProfileLayerTransforms();
  flushLayout();

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.add('is-profile-exiting');
        resolve();
      });
    });
  });

  await wait(PROFILE_SLIDE_DURATION_MS + PROFILE_SLIDE_STAGGER_MS + 40);
  host.classList.remove('is-profile-exiting');
  if (resetPending) setProfileEnterPending(host);
}

function getProfileScrollContainer() {
  return document.getElementById('main-content');
}

function lockProfileOverlayScroll() {
  const main = getProfileScrollContainer();
  if (main) profileOverlayScrollTop = main.scrollTop;
  document.body.classList.add('is-profile-open');
}

function unlockProfileOverlayScroll() {
  document.body.classList.remove('is-profile-open');
  const main = getProfileScrollContainer();
  if (!main) return;

  requestAnimationFrame(() => {
    main.scrollTop = profileOverlayScrollTop;
  });
}

function getProfileNameFitWidth(scope = document) {
  const title = scope.querySelector('.profile-name');
  return title?.clientWidth ?? 0;
}

function measureProfileNameLineWidth(line, fontSizePx) {
  line.style.fontSize = `${fontSizePx}px`;
  return line.getBoundingClientRect().width;
}

function fitProfileNameLine(line, availableWidth) {
  let min = PROFILE_NAME_FIT_MIN;
  let max = Math.max(PROFILE_NAME_FIT_MIN, availableWidth);
  let best = min;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (Math.ceil(measureProfileNameLineWidth(line, mid)) <= availableWidth) {
      best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  let fittedSize = best;
  while (
    fittedSize > PROFILE_NAME_FIT_MIN &&
    Math.ceil(measureProfileNameLineWidth(line, fittedSize)) > availableWidth
  ) {
    fittedSize -= 1;
  }

  line.style.fontSize = `${fittedSize}px`;
}

function fitProfileName(scope = document) {
  const title = scope.querySelector('.profile-name');
  if (!title) return;

  const availableWidth = Math.round(getProfileNameFitWidth(scope));
  if (availableWidth <= 0) return;

  title.querySelectorAll('.project-title-line__text').forEach((line) => {
    fitProfileNameLine(line, availableWidth);
  });
}

function initProfileNameFit(scope = document) {
  const fitSource = scope.querySelector('.profile-content');
  if (!fitSource || !scope.querySelector('.profile-name')) return;

  const runFit = () => fitProfileName(scope);

  runFit();

  if (fitSource.dataset.profileNameFitBound === 'true') return;
  fitSource.dataset.profileNameFitBound = 'true';

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(runFit);
    });
    observer.observe(fitSource);
  }

  if (!profileNameFitResizeBound) {
    profileNameFitResizeBound = true;
    window.addEventListener('resize', () => {
      const stage = document.getElementById('profile-stage');
      const activeScope = stage?.querySelector('.profile-content') ? stage : document;
      fitProfileName(activeScope);
    });
  }

  void (async () => {
    if (document.fonts?.ready) {
      await document.fonts.ready;
      runFit();
    }

    const barlowCondensedLoad = document.fonts?.load?.('800 16px "Barlow Condensed"');
    if (barlowCondensedLoad) {
      try {
        await barlowCondensedLoad;
      } catch {
        // Font loading can fail quietly; refit with whatever is available.
      }
      runFit();
    }
  })();
}

function bindProfileClose(layout, host, onClose) {
  const closeButton = layout.querySelector('.profile-close');
  if (!closeButton || closeButton.dataset.profileCloseBound === 'true') return;

  closeButton.dataset.profileCloseBound = 'true';
  closeButton.addEventListener('click', async (event) => {
    event.preventDefault();
    if (profileOverlayBusy || host.classList.contains('is-profile-exiting')) return;

    profileOverlayBusy = true;
    try {
      await playProfileExit(host, { resetPending: false });
      onClose();
    } finally {
      profileOverlayBusy = false;
    }
  });
}

async function mountProfileLayout(stage) {
  const response = await fetch('profile.html');
  if (!response.ok) return null;

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const profileApp = doc.querySelector('.app--profile');
  if (!profileApp) return null;

  stage.innerHTML = '';
  stage.appendChild(profileApp);

  const layout = stage.querySelector('.profile-layout');
  if (!layout) return null;

  setProfileEnterPending(document.body);
  return layout;
}

function hideProfileOverlay(stage) {
  stage.hidden = true;
  stage.setAttribute('aria-hidden', 'true');
  setProfileEnterPending(document.body);
  unlockProfileOverlayScroll();
}

async function ensureProfileMounted(stage) {
  const existingLayout = stage.querySelector('.profile-layout');
  if (existingLayout) return existingLayout;

  const layout = await mountProfileLayout(stage);
  if (!layout) return null;

  bindProfileClose(layout, document.body, () => {
    hideProfileOverlay(stage);
  });

  return layout;
}

async function openProfileOverlay() {
  const stage = document.getElementById('profile-stage');
  if (
    !stage ||
    profileOverlayBusy ||
    document.body.classList.contains('is-profile-open') ||
    document.body.classList.contains('is-profile-exiting') ||
    document.body.classList.contains('is-about-open') ||
    document.body.classList.contains('is-about-exiting')
  ) {
    return;
  }

  profileOverlayBusy = true;

  try {
    const layout = await ensureProfileMounted(stage);
    if (!layout) return;

    setProfileEnterPending(document.body);
    stage.hidden = false;
    stage.setAttribute('aria-hidden', 'false');
    flushLayout(stage);

    lockProfileOverlayScroll();
    initCustomScrollbars(stage);
    refreshProfileBurstArt(stage);
    initProfileNameFit(stage);
    await playProfileEnter(document.body);
    fitProfileName(stage);
  } finally {
    profileOverlayBusy = false;
  }
}

function initProfilePage() {
  const layout = document.querySelector('.profile-layout');
  if (!layout) return;

  bindProfileClose(layout, document.body, () => {
    window.location.href = 'home.html';
  });

  void (async () => {
    initCustomScrollbars();
    refreshProfileBurstArt(document);
    initProfileNameFit(document);
    await playProfileEnter(document.body);
    fitProfileName(document);
  })();
}

function bindProfileAvatarTrigger() {
  const trigger = document.getElementById('profile-avatar-trigger');
  if (!trigger || trigger.dataset.profileTriggerBound === 'true') return;

  trigger.dataset.profileTriggerBound = 'true';
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    void openProfileOverlay();
  });
}

async function initProfileOverlay() {
  const stage = document.getElementById('profile-stage');
  if (!stage) return;

  bindProfileAvatarTrigger();
  await ensureProfileMounted(stage);
}

if (document.body.classList.contains('profile-page')) {
  initProfilePage();
  if (typeof initCustomCursor === 'function') {
    initCustomCursor();
  }
} else {
  void initProfileOverlay();
}
