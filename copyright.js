const COPYRIGHT_SLIDE_DURATION_MS = 560;
const COPYRIGHT_MOBILE_LAYOUT_MQ = window.matchMedia('(max-width: 560px)');

let copyrightOverlayBusy = false;
let copyrightOverlayScrollTop = 0;
let copyrightFooterBound = false;

function isCopyrightMobileLayout() {
  return COPYRIGHT_MOBILE_LAYOUT_MQ.matches;
}

function isCopyrightOverlayBlocked() {
  return (
    copyrightOverlayBusy
    || document.body.classList.contains('is-copyright-open')
    || document.body.classList.contains('is-copyright-exiting')
    || document.body.classList.contains('is-about-open')
    || document.body.classList.contains('is-about-exiting')
    || document.body.classList.contains('is-profile-open')
    || document.body.classList.contains('is-profile-exiting')
  );
}

function isCopyrightStandalonePage() {
  return document.body.classList.contains('copyright-page');
}

function setCopyrightEnterPending(host) {
  host.classList.remove('is-copyright-exiting', 'is-copyright-entering', 'is-copyright-chrome-hidden');
  host.classList.add('is-copyright-enter-pending');
}

function setCopyrightLayoutEnterPending(layout) {
  if (!layout) return;
  layout.classList.remove('is-copyright-exiting', 'is-copyright-entering', 'is-copyright-revealed');
  layout.classList.add('is-copyright-enter-pending');
}

function clearInlineCopyrightTransforms(layout) {
  if (!layout) return;
  layout.style.removeProperty('transform');
  layout.style.removeProperty('transition');
  layout.querySelectorAll('.copyright-curtain, .copyright-frame').forEach((node) => {
    node.style.removeProperty('transform');
    node.style.removeProperty('transition');
    node.style.removeProperty('opacity');
  });
}

async function playCopyrightEnter(host, layout) {
  clearInlineCopyrightTransforms(layout);

  if (isCopyrightMobileLayout()) {
    host.classList.remove('is-copyright-exiting', 'is-copyright-enter-pending', 'is-copyright-entering');
    layout?.classList.remove('is-copyright-exiting', 'is-copyright-enter-pending', 'is-copyright-entering');
    layout?.classList.add('is-copyright-revealed');
    if (isCopyrightStandalonePage()) {
      host.classList.add('is-copyright-chrome-hidden');
    }
    return;
  }

  setCopyrightEnterPending(host);
  setCopyrightLayoutEnterPending(layout);
  flushLayout(host);

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.remove('is-copyright-enter-pending');
        host.classList.add('is-copyright-entering');
        layout?.classList.remove('is-copyright-enter-pending');
        layout?.classList.add('is-copyright-entering');
        resolve();
      });
    });
  });

  await wait(COPYRIGHT_SLIDE_DURATION_MS + 40);
  host.classList.remove('is-copyright-entering');
  if (isCopyrightStandalonePage()) {
    host.classList.add('is-copyright-chrome-hidden');
  }
  layout?.classList.remove('is-copyright-entering');
  layout?.classList.add('is-copyright-revealed');
}

async function playCopyrightExit(host, layout, { resetPending = true } = {}) {
  host.classList.remove('is-copyright-chrome-hidden', 'is-copyright-enter-pending', 'is-copyright-entering');
  layout?.classList.remove('is-copyright-enter-pending', 'is-copyright-entering', 'is-copyright-revealed');
  clearInlineCopyrightTransforms(layout);

  if (isCopyrightMobileLayout()) {
    host.classList.remove('is-copyright-exiting');
    layout?.classList.remove('is-copyright-exiting');
    if (resetPending) {
      setCopyrightEnterPending(host);
      setCopyrightLayoutEnterPending(layout);
    }
    return;
  }

  flushLayout(host);

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        host.classList.add('is-copyright-exiting');
        layout?.classList.add('is-copyright-exiting');
        resolve();
      });
    });
  });

  await wait(COPYRIGHT_SLIDE_DURATION_MS + 40);
  if (resetPending) {
    host.classList.remove('is-copyright-exiting');
    layout?.classList.remove('is-copyright-exiting');
    setCopyrightEnterPending(host);
    setCopyrightLayoutEnterPending(layout);
  }
}

function getCopyrightScrollContainer() {
  return document.getElementById('main-content');
}

function lockCopyrightOverlayScroll() {
  const main = getCopyrightScrollContainer();
  if (main) copyrightOverlayScrollTop = main.scrollTop;
  document.body.classList.add('is-copyright-open');
}

function unlockCopyrightOverlayScroll() {
  document.body.classList.remove('is-copyright-open');
  const main = getCopyrightScrollContainer();
  if (!main) return;

  requestAnimationFrame(() => {
    main.scrollTop = copyrightOverlayScrollTop;
  });
}

function bindCopyrightClose(layout, host, onClose) {
  const closeButtons = layout.querySelectorAll('.copyright-close');
  if (!closeButtons.length) return;

  closeButtons.forEach((closeButton) => {
    if (closeButton.dataset.copyrightCloseBound === 'true') return;

    closeButton.dataset.copyrightCloseBound = 'true';
    closeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      if (copyrightOverlayBusy || host.classList.contains('is-copyright-exiting')) return;

      copyrightOverlayBusy = true;
      try {
        await playCopyrightExit(host, layout, { resetPending: false });
        onClose();
      } finally {
        copyrightOverlayBusy = false;
      }
    });
  });
}

async function mountCopyrightLayout(stage) {
  const response = await fetch('copyright.html');
  if (!response.ok) return null;

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const copyrightApp = doc.querySelector('.app--copyright');
  if (!copyrightApp) return null;

  stage.innerHTML = '';
  stage.appendChild(copyrightApp);

  const layout = stage.querySelector('.copyright-layout');
  if (!layout) return null;

  setCopyrightEnterPending(document.body);
  setCopyrightLayoutEnterPending(layout);
  return layout;
}

function hideCopyrightOverlay(stage) {
  const layout = stage.querySelector('.copyright-layout');
  stage.hidden = true;
  stage.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-copyright-exiting', 'is-copyright-entering', 'is-copyright-chrome-hidden');
  setCopyrightEnterPending(document.body);
  setCopyrightLayoutEnterPending(layout);
  clearInlineCopyrightTransforms(layout);
  unlockCopyrightOverlayScroll();
}

async function ensureCopyrightMounted(stage) {
  const existingLayout = stage.querySelector('.copyright-layout');
  if (existingLayout) return existingLayout;

  const layout = await mountCopyrightLayout(stage);
  if (!layout) return null;

  bindCopyrightClose(layout, document.body, () => {
    hideCopyrightOverlay(stage);
  });

  return layout;
}

async function openCopyrightOverlay() {
  const stage = document.getElementById('copyright-stage');
  if (!stage || isCopyrightOverlayBlocked()) return;

  copyrightOverlayBusy = true;

  try {
    const layout = await ensureCopyrightMounted(stage);
    if (!layout) return;

    setCopyrightEnterPending(document.body);
    setCopyrightLayoutEnterPending(layout);
    clearInlineCopyrightTransforms(layout);
    flushLayout(stage);

    stage.hidden = false;
    stage.setAttribute('aria-hidden', 'false');
    flushLayout(stage);

    lockCopyrightOverlayScroll();
    await playCopyrightEnter(document.body, layout);
  } finally {
    copyrightOverlayBusy = false;
  }
}

function bindCopyrightFooterButtons() {
  if (copyrightFooterBound) return;
  copyrightFooterBound = true;

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.footer-copyright-btn');
    if (!trigger) return;

    event.preventDefault();

    if (document.body.classList.contains('copyright-page')) return;
    if (document.getElementById('copyright-stage')) {
      void openCopyrightOverlay();
      return;
    }

    window.location.href = 'copyright.html';
  });
}

function initCopyrightPage() {
  const layout = document.querySelector('.copyright-layout');
  if (!layout) return;

  bindCopyrightClose(layout, document.body, () => {
    if (document.referrer && !document.referrer.includes('copyright.html')) {
      window.location.href = document.referrer;
      return;
    }
    window.location.href = 'home.html';
  });

  void (async () => {
    try {
      await playCopyrightEnter(document.body, layout);
    } catch (e) {
      layout.classList.add('is-copyright-revealed');
      document.body.classList.add('is-copyright-chrome-hidden');
    }
  })();
}

function initCopyrightOverlay() {
  const stage = document.getElementById('copyright-stage');
  if (!stage) return;

  bindCopyrightFooterButtons();
}

if (document.body.classList.contains('copyright-page')) {
  initCopyrightPage();
  if (typeof initCustomCursor === 'function') {
    initCustomCursor();
  }
} else {
  initCopyrightOverlay();
}
