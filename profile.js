const PROFILE_SLIDE_DURATION_MS = 560;
const PROFILE_MOBILE_LAYOUT_MQ = window.matchMedia('(max-width: 560px)');

function isProfileMobileLayout() {
  return PROFILE_MOBILE_LAYOUT_MQ.matches;
}
const PROFILE_NAME_FIT_MIN = 12;

let profileOverlayBusy = false;
let profileOverlayScrollTop = 0;
let profileNameFitResizeBound = false;

/** Strip cached frost filters / soft blends so the amoeba stays solid #000. */
function sanitizeProfileAmoeba(root = document) {
  root.querySelectorAll('.profile-amoeba-svg defs, .profile-amoeba-svg filter').forEach((node) => {
    node.remove();
  });

  root.querySelectorAll('.profile-amoeba, .profile-amoeba-svg').forEach((el) => {
    el.style.setProperty('filter', 'none', 'important');
    el.style.setProperty('opacity', '1', 'important');
    el.style.setProperty('mix-blend-mode', 'normal', 'important');
  });

  const pathEl = root.querySelector('.profile-amoeba-path');
  if (!pathEl) return;

  pathEl.removeAttribute('filter');
  pathEl.setAttribute('fill', '#000000');
  pathEl.setAttribute('fill-opacity', '1');
  pathEl.style.setProperty('fill', '#000000', 'important');
  pathEl.style.setProperty('fill-opacity', '1', 'important');
  pathEl.style.setProperty('filter', 'none', 'important');
  pathEl.style.setProperty('opacity', '1', 'important');
  pathEl.style.setProperty('mix-blend-mode', 'normal', 'important');
}

function initProfileAmoebaMorph(root = document) {
  sanitizeProfileAmoeba(root);

  const pathEl = root.querySelector('.profile-amoeba-path');
  if (!pathEl || pathEl.dataset.morphBound === 'true') return;
  if (typeof initStarburstMorph !== 'function') return;

  pathEl.dataset.morphBound = 'true';
  // Same expanded morph engine as copyright (MOTION_SPEED_EXPANDED / WARP_SPEED_EXPANDED).
  initStarburstMorph(pathEl, {
    getSpeeds: () => ({ motion: 7, warp: 26 }),
  });
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
  if (isProfileMobileLayout()) {
    host.classList.remove('is-profile-exiting', 'is-profile-enter-pending', 'is-profile-entering');
    return;
  }

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

  if (isProfileMobileLayout()) {
    host.classList.remove('is-profile-exiting');
    if (resetPending) setProfileEnterPending(host);
    return;
  }

  flushLayout();

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.add('is-profile-exiting');
        resolve();
      });
    });
  });

  await wait(PROFILE_SLIDE_DURATION_MS + 40);
  if (resetPending) {
    host.classList.remove('is-profile-exiting');
    setProfileEnterPending(host);
  }
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

    const titleLoad = document.fonts?.load?.('700 16px BoldineRegular');
    if (titleLoad) {
      try {
        await titleLoad;
      } catch {
        // Font loading can fail quietly; refit with whatever is available.
      }
      runFit();
    }
  })();
}

function bindProfileClose(layout, host, onClose) {
  const app = layout.closest('.app--profile') || layout;
  const closeButtons = app.querySelectorAll('.profile-close');
  if (!closeButtons.length) return;

  closeButtons.forEach((closeButton) => {
    if (closeButton.dataset.profileCloseBound === 'true') return;

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
  });
}

async function mountProfileLayout(stage) {
  const response = await fetch('profile.html?v=20260729profile-amoeba-v1', { cache: 'no-store' });
  if (!response.ok) return null;

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const profileApp = doc.querySelector('.app--profile');
  if (!profileApp) return null;

  stage.innerHTML = '';
  stage.appendChild(profileApp);

  const layout = stage.querySelector('.profile-layout');
  if (!layout) return null;

  sanitizeProfileAmoeba(layout);
  initProfileAmoebaMorph(layout);
  setProfileEnterPending(document.body);
  return layout;
}

function hideProfileOverlay(stage) {
  stage.hidden = true;
  stage.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-profile-exiting', 'is-profile-entering');
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
    document.body.classList.contains('is-about-exiting') ||
    document.body.classList.contains('is-copyright-open') ||
    document.body.classList.contains('is-copyright-exiting')
  ) {
    return;
  }

  profileOverlayBusy = true;

  try {
    const layout = await ensureProfileMounted(stage);
    if (!layout) return;

    if (!isProfileMobileLayout()) {
      setProfileEnterPending(document.body);
    }

    stage.hidden = false;
    stage.setAttribute('aria-hidden', 'false');
    flushLayout(stage);

    lockProfileOverlayScroll();
    initCustomScrollbars(stage);
    sanitizeProfileAmoeba(stage);
    initProfileAmoebaMorph(stage);
    initProfileNameFit(stage);
    initProfileEmailLinks(stage);
    await playProfileEnter(document.body);
    fitProfileName(stage);
  } finally {
    profileOverlayBusy = false;
  }
}

function initProfileEmailLinks(scope = document) {
  if (typeof initEmailLink !== 'function') return;
  const refreshCursorFn = typeof refreshCursor === 'function' ? refreshCursor : undefined;
  initEmailLink(refreshCursorFn, scope);
}

function initProfilePage() {
  const layout = document.querySelector('.profile-layout');
  if (!layout) return;

  bindProfileClose(layout, document.body, () => {
    window.location.href = 'home.html';
  });

  void (async () => {
    initCustomScrollbars();
    sanitizeProfileAmoeba(document);
    initProfileAmoebaMorph(document);
    initProfileNameFit(document);
    initProfileEmailLinks(document);
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

function initProfileOverlay() {
  const stage = document.getElementById('profile-stage');
  if (!stage) return;

  bindProfileAvatarTrigger();
}

if (document.body.classList.contains('profile-page')) {
  initProfilePage();
  if (typeof initCustomCursor === 'function') {
    initCustomCursor();
  }
} else {
  void initProfileOverlay();
}
