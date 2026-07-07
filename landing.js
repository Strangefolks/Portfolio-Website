function initTheme() {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch (_) {}
  document.documentElement.setAttribute('data-theme', theme);
}

initTheme();

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
const LANDING_STARBURST_CENTER = { x: 91, y: 91 };

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

function parseSvgPath(pathData) {
  const tokens = pathData.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) || [];
  const argCount = { M: 2, L: 2, C: 6, Z: 0 };
  const segments = [];
  let i = 0;

  while (i < tokens.length) {
    const cmd = tokens[i++];
    const count = argCount[cmd] ?? 0;
    const coords = [];

    for (let j = 0; j < count; j++) {
      coords.push(parseFloat(tokens[i++]));
    }

    segments.push({ cmd, coords });
  }

  return segments;
}

function rotateAroundCenter(x, y, center, angle) {
  const dx = x - center.x;
  const dy = y - center.y;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return [
    center.x + dx * cos - dy * sin,
    center.y + dx * sin + dy * cos,
  ];
}

function displaceStarburstPoint(x, y, time, center) {
  const dx = x - center.x;
  const dy = y - center.y;
  const dist = Math.hypot(dx, dy);

  if (dist < 0.5) return [x, y];

  const angle = Math.atan2(dy, dx);
  const tipBlend = Math.pow(Math.max(0, Math.min(1, (dist - 46) / 44)), 1.05);
  const valleyBlend = 1 - tipBlend;

  const waveA = Math.sin(time * 0.72 + angle * 4);
  const waveB = Math.sin(time * 1.08 + angle * 6 + 1.6);
  const waveC = Math.cos(time * 0.58 + angle * 2.5 + 0.5);

  const offset =
    tipBlend * (waveA * 5 + waveB * 2) +
    valleyBlend * (waveC * -3 - waveA * 1.5);

  const newDist = Math.max(10, dist + offset);

  return [
    center.x + Math.cos(angle) * newDist,
    center.y + Math.sin(angle) * newDist,
  ];
}

function buildMorphedStarburstPath(segments, warpTime, center, rotationTime = warpTime) {
  const rotation = -rotationTime * 0.032;
  let d = '';

  for (const segment of segments) {
    if (segment.cmd === 'Z') {
      d += 'Z';
      continue;
    }

    d += segment.cmd;

    for (let i = 0; i < segment.coords.length; i += 2) {
      let [nx, ny] = displaceStarburstPoint(
        segment.coords[i],
        segment.coords[i + 1],
        warpTime,
        center
      );
      [nx, ny] = rotateAroundCenter(nx, ny, center, rotation);
      d += `${nx.toFixed(2)} ${ny.toFixed(2)}`;
      if (i + 2 < segment.coords.length) d += ' ';
    }
  }

  return d;
}

let syncLandingStarburstMorph = () => {};

function initLandingStarburstMorph() {
  const pathEl = document.querySelector('.landing-starburst-path');
  const link = document.getElementById('landing-starburst-link');
  if (!pathEl || !link) return;

  const basePath = pathEl.getAttribute('d') || '';
  const segments = parseSvgPath(basePath);
  if (!segments.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let rafId = 0;
  let running = false;
  let isPaused = false;
  let warpPhase = 0;
  let rotationPhase = 0;
  let lastTick = 0;
  let motionSpeed = 1;
  let warpSpeed = 1;
  const MOTION_SPEED_EXPANDED = 3;
  const WARP_SPEED_EXPANDED = 18;
  const SPEED_RAMP_RATE = 6;

  const tick = (now) => {
    rafId = 0;

    if (running && !isPaused) {
      const dt = lastTick ? Math.min(0.05, (now - lastTick) / 1000) : 0;
      lastTick = now;

      const isExpanded = document.body.classList.contains('is-landing-expanded');
      const targetMotion = isExpanded ? MOTION_SPEED_EXPANDED : 1;
      const targetWarp = isExpanded ? WARP_SPEED_EXPANDED : 1;
      const blend = dt > 0 ? 1 - Math.exp(-SPEED_RAMP_RATE * dt) : 0;

      motionSpeed += (targetMotion - motionSpeed) * blend;
      warpSpeed += (targetWarp - warpSpeed) * blend;
      warpPhase += dt * warpSpeed;
      rotationPhase += dt * motionSpeed;

      pathEl.setAttribute(
        'd',
        buildMorphedStarburstPath(segments, warpPhase, LANDING_STARBURST_CENTER, rotationPhase)
      );
    }

    if (running) {
      rafId = requestAnimationFrame(tick);
    }
  };

  const start = () => {
    if (running) return;
    running = true;
    lastTick = 0;
    rafId = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
    motionSpeed = 1;
    warpSpeed = 1;
    pathEl.setAttribute('d', basePath);
  };

  syncLandingStarburstMorph = () => {
    if (document.body.classList.contains('is-landing-expanded')) {
      start();
      return;
    }
    stop();
  };

  document.addEventListener('visibilitychange', () => {
    isPaused = document.visibilityState !== 'visible';
  });
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

  if (isExpandedLayout && !useViewportAnchor) {
    cx = landingRect.width / 2;
    cy = landingRect.height / 2;
    coverWidth = landingRect.width;
    coverHeight = landingRect.height;
  } else {
    cx = useViewportAnchor
      ? rect.left + rect.width / 2
      : rect.left + rect.width / 2 - landingRect.left;
    cy = useViewportAnchor
      ? rect.top + rect.height / 2
      : rect.top + rect.height / 2 - landingRect.top;
    coverWidth = useViewportAnchor ? window.innerWidth : landingRect.width;
    coverHeight = useViewportAnchor ? window.innerHeight : landingRect.height;
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
    document.body.classList.remove('is-landing-intro-pending', 'is-landing-intro');
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.remove('is-landing-intro-pending');
    document.body.classList.remove('is-landing-intro-pending', 'is-landing-intro');
    return;
  }

  document.body.classList.add('is-landing-intro');

  const restRect = link.getBoundingClientRect();
  link.style.setProperty('--burst-rest-size', `${Math.round(restRect.width)}px`);
  document.body.classList.add('is-landing-expanded');
  updateLandingBurstAnchor(link, { expandedLayout: true });

  root.classList.remove('is-landing-intro-pending');
  document.body.classList.remove('is-landing-intro-pending');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setLandingExpanded(link, false);
      window.setTimeout(() => {
        document.body.classList.remove('is-landing-intro');
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
