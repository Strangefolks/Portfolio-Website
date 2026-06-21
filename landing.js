const themeToggle = document.getElementById('theme-toggle');
const themeToggleTooltip = document.getElementById('theme-toggle-tooltip');

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const commitTheme = () => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle?.setAttribute('aria-label', label);
    if (themeToggleTooltip) themeToggleTooltip.textContent = label;
  };

  if (prefersReducedMotion) {
    commitTheme();
    return;
  }

  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(commitTheme);
    return;
  }

  root.classList.add('is-theme-transitioning');
  commitTheme();
  window.setTimeout(() => root.classList.remove('is-theme-transitioning'), 520);
}

function initTheme() {
  applyTheme('dark');
}

if (themeToggle) {
  initTheme();
  themeToggle.addEventListener('click', () => {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  });
}

function alignLandingLocationWithEmail() {
  const emailIcon = document.querySelector('#email-link .email-link-icon');
  const locationItem = document.querySelector('.landing-meta--top .landing-meta-item--right');
  const dot = locationItem?.querySelector('.meta-dot');
  if (!emailIcon || !locationItem || !dot) return;

  locationItem.style.transform = '';

  const offset = Math.round(emailIcon.getBoundingClientRect().left - dot.getBoundingClientRect().left);
  if (offset !== 0) {
    locationItem.style.transform = `translateX(${offset}px)`;
  }
}

function alignLandingBottomMetaWithTop() {
  const topLeftDot = document.querySelector('.landing-meta--top .landing-meta-item--left .meta-dot');
  const bottomLeftItem = document.querySelector('.landing-meta--bottom .landing-meta-item--left');
  const bottomLeftDot = bottomLeftItem?.querySelector('.meta-dot');
  const topRightDot = document.querySelector('.landing-meta--top .landing-meta-item--right .meta-dot');
  const bottomRightItem = document.querySelector('.landing-meta--bottom .landing-meta-item--right');
  const bottomRightDot = bottomRightItem?.querySelector('.meta-dot');

  if (bottomLeftItem) bottomLeftItem.style.transform = '';
  if (bottomRightItem) bottomRightItem.style.transform = '';

  if (topLeftDot && bottomLeftDot && bottomLeftItem) {
    const offset = Math.round(topLeftDot.getBoundingClientRect().left - bottomLeftDot.getBoundingClientRect().left);
    if (offset !== 0) {
      bottomLeftItem.style.transform = `translateX(${offset}px)`;
    }
  }

  if (topRightDot && bottomRightDot && bottomRightItem) {
    const offset = Math.round(topRightDot.getBoundingClientRect().left - bottomRightDot.getBoundingClientRect().left);
    if (offset !== 0) {
      bottomRightItem.style.transform = `translateX(${offset}px)`;
    }
  }
}

function syncLandingMetaAlign() {
  alignLandingLocationWithEmail();
  alignLandingBottomMetaWithTop();
}

function initLandingMetaAlign() {
  const emailLink = document.getElementById('email-link');
  if (!emailLink || !document.querySelector('.landing-meta--top .landing-meta-item--right')) return;

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

function initEmailLink(refreshCursor) {
  const emailLink = document.getElementById('email-link');
  if (!emailLink) return;

  const emailText = emailLink.querySelector('.email-link-text');
  const email = emailLink.dataset.email || 'hello@tedpio.design';
  let copiedTimeout;

  emailLink.addEventListener('click', async (e) => {
    e.preventDefault();
    if (emailLink.classList.contains('is-copied')) return;

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    emailLink.classList.add('is-copied');
    emailText.textContent = 'Copied to clipboard';
    refreshCursor?.();

    clearTimeout(copiedTimeout);
    copiedTimeout = setTimeout(() => {
      emailLink.classList.remove('is-copied');
      emailText.textContent = email;
      refreshCursor?.();
    }, 1000);
  });
}

const refreshCursor = typeof initCustomCursor === 'function' ? initCustomCursor() : undefined;
initEmailLink(refreshCursor);

const PORTFOLIO_ENTRY_KEY = 'portfolio-entry-from-landing';
const PORTFOLIO_BURST_REVEAL_KEY = 'portfolio-entry-burst-reveal';
const PORTFOLIO_BURST_SCALE_KEY = 'portfolio-entry-burst-scale';
const PORTFOLIO_BURST_X_KEY = 'portfolio-entry-burst-x';
const PORTFOLIO_BURST_Y_KEY = 'portfolio-entry-burst-y';
const LANDING_EXIT_MS = 520;
const LANDING_BURST_PEAK_HOLD_MS = 100;
const LANDING_STARBURST_CENTER = { x: 91, y: 91 };

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function waitForPortfolioPrefetchReady() {
  const iframe = document.getElementById('portfolio-prefetch-frame');
  if (!iframe) return Promise.resolve();

  return new Promise((resolve) => {
    const cap = window.setTimeout(resolve, 3500);
    const done = () => {
      window.clearTimeout(cap);
      window.setTimeout(resolve, 80);
    };

    try {
      if (iframe.contentDocument?.readyState === 'complete') {
        done();
        return;
      }
    } catch (_) {}

    iframe.addEventListener('load', done, { once: true });
  });
}

function prefetchPortfolio() {
  if (!document.querySelector('link[data-prefetch-portfolio]')) {
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = 'home.html';
    prefetchLink.setAttribute('data-prefetch-portfolio', '');
    document.head.appendChild(prefetchLink);
  }

  if (!document.querySelector('link[data-preload-portfolio-app]')) {
    const preloadApp = document.createElement('link');
    preloadApp.rel = 'preload';
    preloadApp.href = 'app.js?v=20250620ac';
    preloadApp.as = 'script';
    preloadApp.setAttribute('data-preload-portfolio-app', '');
    document.head.appendChild(preloadApp);
  }

  if (!window.__portfolioHtmlPrefetched) {
    window.__portfolioHtmlPrefetched = true;
    fetch('home.html', { credentials: 'same-origin' }).catch(() => {});
  }

  if (!document.getElementById('portfolio-prefetch-frame')) {
    const iframe = document.createElement('iframe');
    iframe.id = 'portfolio-prefetch-frame';
    iframe.src = 'home.html';
    iframe.hidden = true;
    iframe.setAttribute('aria-hidden', 'true');
    iframe.setAttribute('tabindex', '-1');
    iframe.setAttribute('title', '');
    Object.assign(iframe.style, {
      position: 'absolute',
      width: '0',
      height: '0',
      border: '0',
      opacity: '0',
      pointerEvents: 'none',
    });
    document.body.appendChild(iframe);
  }
}

function waitForLandingBurstExpand(link) {
  const stack = link.querySelector('.landing-starburst-stack');
  if (!stack) return wait(LANDING_EXIT_MS);

  return new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      stack.removeEventListener('transitionend', onTransitionEnd);
      resolve();
    };
    const onTransitionEnd = (event) => {
      if (event.target !== stack || event.propertyName !== 'transform') return;
      finish();
    };

    stack.addEventListener('transitionend', onTransitionEnd);
    window.setTimeout(finish, LANDING_EXIT_MS + 80);
  });
}

function navigateToPortfolio(
  href,
  { burstReveal = false, burstScale = null, burstX = null, burstY = null } = {}
) {
  try {
    sessionStorage.setItem(PORTFOLIO_ENTRY_KEY, '1');
    if (burstReveal) {
      sessionStorage.setItem(PORTFOLIO_BURST_REVEAL_KEY, '1');
      if (burstScale != null) {
        sessionStorage.setItem(PORTFOLIO_BURST_SCALE_KEY, String(burstScale));
      }
      if (burstX != null) {
        sessionStorage.setItem(PORTFOLIO_BURST_X_KEY, String(burstX));
      }
      if (burstY != null) {
        sessionStorage.setItem(PORTFOLIO_BURST_Y_KEY, String(burstY));
      }
    }
  } catch (_) {}
  window.location.href = href;
}

async function playLandingExit(href, link) {
  const launchBtn = link.querySelector('.landing-launch-btn');
  const starburst = link.querySelector('.landing-starburst');
  if (!starburst) {
    navigateToPortfolio(href);
    return;
  }

  setLandingExpanded(link, true);
  updateLandingBurstAnchor(link);
  document.body.classList.add('is-landing-transitioning');

  const rect = starburst.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height, 1);
  const coverScale = (Math.hypot(window.innerWidth, window.innerHeight) / size) * 1.35;

  link.style.setProperty('--landing-cover-scale', String(coverScale));
  launchBtn?.classList.add('is-label-exiting', 'is-cursor-exiting');
  document.body.classList.add('is-landing-launching', 'is-landing-exiting-burst');

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });

  await waitForLandingBurstExpand(link);
  await wait(LANDING_BURST_PEAK_HOLD_MS);

  const fill = link.querySelector('.landing-starburst-fill');
  if (fill) {
    fill.style.opacity = '0';
  }

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });

  await waitForPortfolioPrefetchReady();

  const stack = link.querySelector('.landing-starburst-stack');
  const stackRect = stack?.getBoundingClientRect();
  const burstCenterX = stackRect
    ? stackRect.left + stackRect.width / 2
    : window.innerWidth / 2;
  const burstCenterY = stackRect
    ? stackRect.top + stackRect.height / 2
    : window.innerHeight / 2;

  navigateToPortfolio(href, {
    burstReveal: true,
    burstScale: coverScale,
    burstX: burstCenterX,
    burstY: burstCenterY,
  });
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

function initLandingStarburstMorph() {
  const pathEl = document.querySelector('.landing-starburst-path');
  if (!pathEl) return;

  const basePath = pathEl.getAttribute('d') || '';
  const segments = parseSvgPath(basePath);
  if (!segments.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  let rafId = 0;
  let isPaused = false;
  let warpPhase = 0;
  let rotationPhase = 0;
  let lastTick = 0;
  let motionSpeed = 1;
  let warpSpeed = 1;
  const MOTION_SPEED_EXPANDED = 4;
  const WARP_SPEED_EXPANDED = 36;
  const SPEED_RAMP_RATE = 6;

  const tick = (now) => {
    if (!isPaused) {
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

      const morphedPath = buildMorphedStarburstPath(
        segments,
        warpPhase,
        LANDING_STARBURST_CENTER,
        rotationPhase
      );
      pathEl.setAttribute('d', morphedPath);
    }
    rafId = requestAnimationFrame(tick);
  };

  const handleVisibility = () => {
    isPaused = document.visibilityState !== 'visible';
  };

  document.addEventListener('visibilitychange', handleVisibility);
  rafId = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener('visibilitychange', handleVisibility);
    pathEl.setAttribute('d', basePath);
  };
}

function updateLandingBurstAnchor(link) {
  const starburst = link.querySelector('.landing-starburst');
  const landing = link.closest('.landing');
  if (!starburst || !landing) return;

  const rect = link.getBoundingClientRect();
  const landingRect = landing.getBoundingClientRect();
  const useViewportAnchor = isTouchLandingUi();
  const size = Math.max(rect.width, rect.height, 1);
  const cx = useViewportAnchor
    ? rect.left + rect.width / 2
    : rect.left + rect.width / 2 - landingRect.left;
  const cy = useViewportAnchor
    ? rect.top + rect.height / 2
    : rect.top + rect.height / 2 - landingRect.top;
  const coverWidth = useViewportAnchor ? window.innerWidth : landingRect.width;
  const coverHeight = useViewportAnchor ? window.innerHeight : landingRect.height;
  const maxDist = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(coverWidth - cx, cy),
    Math.hypot(cx, coverHeight - cy),
    Math.hypot(coverWidth - cx, coverHeight - cy)
  );
  const scale = (maxDist * 3.479) / size;

  link.style.setProperty('--burst-anchor-x', `${Math.round(cx)}px`);
  link.style.setProperty('--burst-anchor-y', `${Math.round(cy)}px`);
  link.style.setProperty('--burst-rest-size', `${Math.round(rect.width)}px`);
  link.style.setProperty('--burst-hover-scale', String(scale));
  link.style.setProperty('--burst-expanded-size', `${Math.ceil(size * scale)}px`);
}

function initLandingBurstAnchor(link) {
  const hero = link.closest('.landing-hero');
  const landing = link.closest('.landing');
  const update = () => updateLandingBurstAnchor(link);

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

function setLandingExpanded(link, expanded) {
  if (expanded) {
    updateLandingBurstAnchor(link);
    prefetchPortfolio();
    if (isTouchLandingUi()) {
      if (!document.body.classList.contains('is-landing-expanded')) {
        requestAnimationFrame(() => {
          updateLandingBurstAnchor(link);
          document.body.classList.add('is-landing-expanded');
        });
      }
      return;
    }
  } else {
    setLandingLaunchReady(false);
    if (isTouchLandingUi()) {
      document.body.classList.remove('is-landing-expanded');
      return;
    }
  }
  document.body.classList.toggle('is-landing-expanded', expanded);
  if (expanded && !isTouchLandingUi()) {
    setLandingLaunchReady(true);
  }
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

function initLandingHero() {
  const link = document.getElementById('landing-starburst-link');
  if (!link) return;

  initLandingBurstAnchor(link);

  if (isTouchLandingUi()) return;

  link.addEventListener('mouseenter', () => setLandingExpanded(link, true));
  link.addEventListener('mouseleave', () => setLandingExpanded(link, false));
  link.addEventListener('focusin', () => setLandingExpanded(link, true));
  link.addEventListener('focusout', (event) => {
    if (link.contains(event.relatedTarget)) return;
    setLandingExpanded(link, false);
  });
}

function initLandingTransition() {
  const link = document.querySelector('.landing-starburst-link');
  if (!link) return;

  const isTouchLanding = isTouchLandingUi();
  const launchBtn = link.querySelector('.landing-launch-btn');
  const href = link.getAttribute('href') || 'home.html';
  let touchExpandLockUntil = 0;

  const proceedToPortfolio = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      navigateToPortfolio(href);
      return;
    }

    void playLandingExit(href, link);
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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      navigateToPortfolio(href);
      return;
    }

    void playLandingExit(href, link);
  });
}

function initLandingOrbitTextFit() {
  const svg = document.querySelector('.landing-orbit-svg');
  const path = document.getElementById('landing-orbit-text-path');
  const textEl = document.querySelector('.landing-orbit-text');
  const textPath = textEl?.querySelector('textPath');
  const outerRing = svg?.querySelector('.landing-orbit-ring--outer');
  const innerRing = svg?.querySelector('.landing-orbit-ring--inner');
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

    // Positive = glyph visual center sits below the em box center (toward inner ring at 12 o'clock).
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
  };

  apply();
  window.addEventListener('resize', apply);
  if (document.fonts?.ready) {
    document.fonts.ready.then(apply);
  }
}

initLandingStarburstMorph();

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

initMobileBrowserUiInset();
initLandingHero();
initLandingTransition();
initLandingMetaAlign();
initLandingOrbitTextFit();
