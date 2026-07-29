const LANDING_META_MOBILE_MQ = window.matchMedia('(max-width: 560px)');

function alignLandingMetaColumnsWithEmail() {
  const emailIcon = document.querySelector('#email-link .email-link-icon');
  const rightColumns = document.querySelectorAll('.landing-meta-column--right');

  rightColumns.forEach((column) => {
    column.style.transform = '';
  });

  if (LANDING_META_MOBILE_MQ.matches || !emailIcon || !rightColumns.length) return;

  rightColumns.forEach((column) => {
    const dot = column.querySelector('.meta-dot');
    if (!dot) return;

    const offset = Math.round(emailIcon.getBoundingClientRect().left - dot.getBoundingClientRect().left);
    if (offset !== 0) {
      column.style.transform = `translateX(${offset}px)`;
    }
  });
}

function syncLandingMetaAlign() {
  alignLandingMetaColumnsWithEmail();
}

function initLandingMetaAlign() {
  const emailLink = document.getElementById('email-link');
  if (!emailLink || !document.querySelector('.landing-meta-column--right')) return;

  const sync = () => requestAnimationFrame(syncLandingMetaAlign);

  sync();
  window.addEventListener('resize', sync);

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(sync);
    observer.observe(emailLink);
    const headerShell = document.getElementById('header-shell');
    if (headerShell) observer.observe(headerShell);
    const landing = document.querySelector('.landing');
    if (landing) observer.observe(landing);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(sync);
  }
}

const refreshCursor = typeof initCustomCursor === 'function' ? initCustomCursor() : undefined;
initEmailLink(refreshCursor);

const PORTFOLIO_ENTRY_KEY = 'portfolio-entry-from-landing';
const PORTFOLIO_WHITE_ENTRY_KEY = 'portfolio-entry-white';
const LANDING_EXIT_BLUE_MS = 180;
const LANDING_EXIT_WHITE_MS = 480;
const LANDING_STARBURST_CENTER = STARBURST_MORPH_CENTER;
const MOTION_SPEED_IDLE = 4;
const WARP_SPEED_IDLE = 5;
const MOTION_SPEED_EXPANDED = 7;
const WARP_SPEED_EXPANDED = 26;

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function navigateToPortfolio(href, { whiteEntry = false } = {}) {
  try {
    sessionStorage.setItem(PORTFOLIO_ENTRY_KEY, '1');
    if (whiteEntry) {
      sessionStorage.setItem(PORTFOLIO_WHITE_ENTRY_KEY, '1');
    }
  } catch (_) {}
  window.location.href = href;
}

async function playLandingExit(href) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    navigateToPortfolio(href, { whiteEntry: true });
    return;
  }

  const curtain = document.getElementById('landing-exit-curtain');
  document.body.classList.add('is-landing-launching');

  if (curtain) {
    curtain.hidden = false;
    curtain.setAttribute('aria-hidden', 'false');
    curtain.classList.remove('is-white');
    curtain.classList.add('is-visible');
  }

  await wait(LANDING_EXIT_BLUE_MS);

  if (curtain) {
    curtain.classList.add('is-white');
  }

  await wait(LANDING_EXIT_WHITE_MS);
  navigateToPortfolio(href, { whiteEntry: true });
}

let syncLandingStarburstMorph = () => {};

function initLandingStarburstMorph() {
  const pathEl = document.querySelector('.landing-starburst-path');
  if (!pathEl || typeof initStarburstMorph !== 'function') return;

  const controller = initStarburstMorph(pathEl, {
    center: LANDING_STARBURST_CENTER,
    getSpeeds: () => {
      const isExpanded = document.body.classList.contains('is-landing-expanded');
      return isExpanded
        ? { motion: MOTION_SPEED_EXPANDED, warp: WARP_SPEED_EXPANDED }
        : { motion: MOTION_SPEED_IDLE, warp: WARP_SPEED_IDLE };
    },
  });

  syncLandingStarburstMorph = () => {
    controller?.start();
  };
}

function updateLandingBurstAnchor(link, { expandedLayout = false } = {}) {
  const starburst = link.querySelector('.landing-starburst');
  const landing = link.closest('.landing');
  if (!starburst || !landing) return;

  const rect = link.getBoundingClientRect();
  const landingRect = landing.getBoundingClientRect();
  const useViewportAnchor = isTouchLandingUi();
  const isExpandedLayout = expandedLayout || document.body.classList.contains('is-landing-expanded');
  const storedRestSize = parseFloat(link.style.getPropertyValue('--burst-rest-size'));
  const size = Number.isFinite(storedRestSize) && storedRestSize > 0
    ? storedRestSize
    : Math.max(rect.width, rect.height, 1);

  let cx;
  let cy;
  let coverWidth;
  let coverHeight;

  if (isExpandedLayout) {
    cx = landingRect.width / 2;
    cy = landingRect.height / 2;
    coverWidth = landingRect.width;
    coverHeight = landingRect.height;
  } else if (useViewportAnchor) {
    cx = rect.left + rect.width / 2;
    cy = rect.top + rect.height / 2;
    coverWidth = window.innerWidth;
    coverHeight = window.innerHeight;
  } else {
    cx = rect.left + rect.width / 2 - landingRect.left;
    cy = rect.top + rect.height / 2 - landingRect.top;
    coverWidth = landingRect.width;
    coverHeight = landingRect.height;
  }

  const maxDist = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(coverWidth - cx, cy),
    Math.hypot(cx, coverHeight - cy),
    Math.hypot(coverWidth - cx, coverHeight - cy)
  );
  const scale = (maxDist * 3.479) / size;

  const expandedSize = Math.ceil(size * scale);

  link.style.setProperty('--burst-anchor-x', `${Math.round(cx)}px`);
  link.style.setProperty('--burst-anchor-y', `${Math.round(cy)}px`);
  if (!Number.isFinite(storedRestSize) || storedRestSize <= 0) {
    link.style.setProperty('--burst-rest-size', `${Math.round(rect.width)}px`);
  }
  link.style.setProperty('--burst-hover-scale', String(scale));
  link.style.setProperty('--burst-expanded-size', `${expandedSize}px`);
}

function initLandingBurstAnchor(link) {
  const hero = link.closest('.landing-hero');
  const landing = link.closest('.landing');
  const update = () => {
    updateLandingBurstAnchor(link, {
      expandedLayout: document.body.classList.contains('is-landing-expanded'),
    });
  };

  update();

  window.addEventListener('resize', update);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(update);
    ro.observe(link);
    if (hero) ro.observe(hero);
    if (landing) ro.observe(landing);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(update);
  }
}

function syncLandingExpandedUi(expanded) {
  const closeBtn = document.getElementById('landing-starburst-close');
  if (closeBtn) {
    closeBtn.hidden = !expanded;
    closeBtn.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  }
  syncLandingStarburstMorph();
}

function setLandingExpanded(link, expanded) {
  if (expanded && document.body.classList.contains('is-landing-intro')) {
    return;
  }

  if (expanded) {
    const restRect = link.getBoundingClientRect();
    link.style.setProperty('--burst-rest-size', `${Math.round(restRect.width)}px`);
    updateLandingBurstAnchor(link);

    const finishExpand = () => {
      document.body.classList.add('is-landing-expanded');
      requestAnimationFrame(() => {
        updateLandingBurstAnchor(link, { expandedLayout: true });
        syncLandingExpandedUi(true);
        if (!isTouchLandingUi()) {
          setLandingLaunchReady(true);
        }
      });
    };

    if (isTouchLandingUi()) {
      if (!document.body.classList.contains('is-landing-expanded')) {
        requestAnimationFrame(finishExpand);
      }
      return;
    }

    finishExpand();
    return;
  }

  setLandingLaunchReady(false);
  document.body.classList.remove('is-landing-expanded');
  link.style.removeProperty('--burst-rest-size');
  requestAnimationFrame(() => {
    updateLandingBurstAnchor(link);
  });
  syncLandingExpandedUi(false);
}

function isTouchLandingUi() {
  return (
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    || window.matchMedia('(max-width: 560px)').matches
  );
}

function setLandingLaunchReady(enabled) {
  document.body.classList.toggle('is-landing-launch-ready', enabled);
}

function collapseLandingFromBackground(link, event) {
  if (!document.body.classList.contains('is-landing-expanded')) return;
  if (document.body.classList.contains('is-landing-launching')) return;
  if (link.contains(event.target)) return;
  setLandingExpanded(link, false);
}

function initLandingBackgroundCollapse(link) {
  const landing = link.closest('.landing');
  if (!landing) return;

  landing.addEventListener('click', (event) => {
    collapseLandingFromBackground(link, event);
  });
}

function initLandingStarburstClose(link) {
  const closeBtn = document.getElementById('landing-starburst-close');
  if (!closeBtn) return;

  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!document.body.classList.contains('is-landing-expanded')) return;
    setLandingExpanded(link, false);
  });
}

function initLandingHero() {
  const link = document.getElementById('landing-starburst-link');
  if (!link) return;

  initLandingBurstAnchor(link);
  initLandingBackgroundCollapse(link);
  initLandingStarburstClose(link);

  if (isTouchLandingUi()) return;

  link.addEventListener('mouseenter', () => setLandingExpanded(link, true));
  link.addEventListener('focusin', () => setLandingExpanded(link, true));
}

function initLandingTransition() {
  const link = document.querySelector('.landing-starburst-link');
  if (!link) return;

  const isTouchLanding = isTouchLandingUi();
  const launchBtn = link.querySelector('.landing-launch-btn');
  const href = link.getAttribute('href') || 'home.html';
  let touchExpandLockUntil = 0;

  const proceedToPortfolio = () => {
    void playLandingExit(href);
  };

  if (isTouchLanding) {
    link.addEventListener(
      'click',
      (event) => {
        event.preventDefault();
      },
      true
    );

    link.addEventListener('touchend', (event) => {
      if (launchBtn && (launchBtn === event.target || launchBtn.contains(event.target))) return;

      event.preventDefault();
      if (document.body.classList.contains('is-landing-expanded')) return;

      setLandingExpanded(link, true);
      setLandingLaunchReady(false);
      touchExpandLockUntil = Date.now() + 420;
      window.setTimeout(() => setLandingLaunchReady(true), 420);
    });

    launchBtn?.addEventListener('touchend', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (Date.now() < touchExpandLockUntil) return;
      if (!document.body.classList.contains('is-landing-expanded')) return;
      proceedToPortfolio();
    });

    launchBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    proceedToPortfolio();
  });
}

function initLandingOrbitTextFit() {
  const svg = document.querySelector('.landing-orbit-svg');
  const path = document.getElementById('landing-orbit-text-path');
  const textEl = document.querySelector('.landing-orbit-text');
  const textPath = textEl?.querySelector('textPath');
  const outerRing = svg?.querySelector('.landing-orbit-ring--outer');
  const innerRing = svg?.querySelector('.landing-orbit-ring--inner');
  const orbit = document.querySelector('.landing-orbit');
  if (!path || !textPath || !textEl || !svg) return;

  const centerX = 250;
  const centerY = 250;
  const svgNs = 'http://www.w3.org/2000/svg';

  const buildCirclePath = (radius) =>
    `M ${centerX},${centerY} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${radius * 2} a ${radius},${radius} 0 1,1 0,-${radius * 2}`;

  const measureGlyphCenterOffset = () => {
    const styles = getComputedStyle(textEl);
    const probe = document.createElementNS(svgNs, 'text');
    probe.setAttribute('font-family', styles.fontFamily);
    probe.setAttribute('font-size', styles.fontSize);
    probe.setAttribute('font-weight', styles.fontWeight);
    probe.setAttribute('letter-spacing', styles.letterSpacing);
    probe.setAttribute('dominant-baseline', 'central');
    probe.setAttribute('visibility', 'hidden');
    probe.setAttribute('x', '0');
    probe.setAttribute('y', '0');
    probe.textContent = 'H';
    svg.appendChild(probe);

    const box = probe.getBBox();
    svg.removeChild(probe);

    return box.y + box.height / 2;
  };

  const apply = () => {
    const outerR = parseFloat(outerRing?.getAttribute('r') || '206');
    const innerR = parseFloat(innerRing?.getAttribute('r') || '186');
    const midRadius = (outerR + innerR) / 2;
    const glyphCenterOffset = measureGlyphCenterOffset();
    const radius = midRadius + glyphCenterOffset;
    path.setAttribute('d', buildCirclePath(radius));
    textPath.removeAttribute('dy');

    const length = path.getTotalLength();
    if (length <= 0) return;
    textPath.setAttribute('textLength', String(length));
    textPath.setAttribute('lengthAdjust', 'spacing');
    orbit?.classList.add('is-orbit-fitted');
  };

  apply();
  window.addEventListener('resize', apply);
  if (document.fonts?.ready) {
    document.fonts.ready.then(apply);
  }
}

function initMobileBrowserUiInset() {
  if (!window.matchMedia('(max-width: 560px)').matches) return;

  const sync = () => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const obscured = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
    const inset = Math.round(obscured);
    document.documentElement.style.setProperty('--mobile-browser-ui-inset', `${inset}px`);
  };

  sync();
  window.visualViewport?.addEventListener('resize', sync);
  window.visualViewport?.addEventListener('scroll', sync);
  window.addEventListener('resize', sync);
  window.addEventListener('orientationchange', sync);
}

const LANDING_INTRO_MS = 760;

function initLandingIntro() {
  const link = document.getElementById('landing-starburst-link');
  const root = document.documentElement;
  const pending = document.body.classList.contains('is-landing-intro-pending');

  if (!link || !pending) {
    root.classList.remove('is-landing-intro-pending');
    document.body.classList.remove(
      'is-landing-intro-pending',
      'is-landing-intro',
      'is-landing-intro-grow'
    );
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.remove('is-landing-intro-pending');
    document.body.classList.remove(
      'is-landing-intro-pending',
      'is-landing-intro',
      'is-landing-intro-grow'
    );
    return;
  }

  document.body.classList.add('is-landing-intro');
  root.classList.remove('is-landing-intro-pending');
  document.body.classList.remove('is-landing-intro-pending');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('is-landing-intro-grow');
      window.setTimeout(() => {
        const linkEl = document.getElementById('landing-starburst-link');
        if (linkEl) {
          linkEl.style.transition = 'none';
          linkEl.style.transform = 'none';
        }
        document.body.classList.remove('is-landing-intro', 'is-landing-intro-grow');
        requestAnimationFrame(() => {
          if (linkEl) {
            linkEl.style.removeProperty('transition');
            linkEl.style.removeProperty('transform');
          }
        });
      }, LANDING_INTRO_MS);
    });
  });
}

initLandingIntro();
initLandingStarburstMorph();
initMobileBrowserUiInset();
initLandingHero();
initLandingTransition();
initLandingMetaAlign();
initLandingOrbitTextFit();
