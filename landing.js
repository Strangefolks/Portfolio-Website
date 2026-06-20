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
const LANDING_LAUNCH_BTN_SHRINK_MS = 300;
const LANDING_BURST_EXPAND_MS = 520;
const LANDING_STARBURST_CENTER = { x: 91, y: 91 };

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function prefetchPortfolio() {
  if (document.querySelector('link[data-prefetch-portfolio]')) return;

  const prefetchLink = document.createElement('link');
  prefetchLink.rel = 'prefetch';
  prefetchLink.href = 'home.html';
  prefetchLink.setAttribute('data-prefetch-portfolio', '');
  document.head.appendChild(prefetchLink);
}

function navigateToPortfolio(href, { burstReveal = false, burstScale = null } = {}) {
  try {
    sessionStorage.setItem(PORTFOLIO_ENTRY_KEY, '1');
    if (burstReveal) {
      sessionStorage.setItem(PORTFOLIO_BURST_REVEAL_KEY, '1');
      if (burstScale != null) {
        sessionStorage.setItem(PORTFOLIO_BURST_SCALE_KEY, String(burstScale));
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

  launchBtn?.classList.add('is-exiting');

  await wait(LANDING_LAUNCH_BTN_SHRINK_MS);

  const rect = starburst.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const size = Math.max(rect.width, rect.height, 1);
  const coverScale = (Math.hypot(window.innerWidth, window.innerHeight) / size) * 1.35;

  const overlay = document.createElement('div');
  overlay.className = 'landing-transition';
  overlay.setAttribute('aria-hidden', 'true');

  const fill = document.createElement('div');
  fill.className = 'landing-transition-fill';

  const burst = starburst.cloneNode(true);
  burst.classList.add('landing-transition-burst');
  burst.setAttribute('aria-hidden', 'true');
  burst.style.width = `${size}px`;
  burst.style.height = `${size}px`;
  burst.style.left = `${cx}px`;
  burst.style.top = `${cy}px`;

  overlay.appendChild(fill);
  overlay.appendChild(burst);
  document.body.appendChild(overlay);
  document.body.classList.add('is-landing-transitioning', 'is-landing-launching');

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('is-active', 'is-expanding');
        burst.style.transform = `translate(-50%, -50%) scale(${coverScale})`;
        resolve();
      });
    });
  });

  await wait(LANDING_BURST_EXPAND_MS);

  navigateToPortfolio(href, { burstReveal: true, burstScale: coverScale });
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

  const tick = (now) => {
    if (!isPaused) {
      const baseTime = now / 1000;
      const isExpanded = document.body.classList.contains('is-landing-expanded');
      const hoverMotionSpeed = isExpanded ? 4 : 1;
      const hoverWarpSpeed = isExpanded ? hoverMotionSpeed * 9 : 1;
      const morphedPath = buildMorphedStarburstPath(
        segments,
        baseTime * hoverWarpSpeed,
        LANDING_STARBURST_CENTER,
        baseTime * hoverMotionSpeed
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
  const cx = rect.left + rect.width / 2 - landingRect.left;
  const cy = rect.top + rect.height / 2 - landingRect.top;
  const size = Math.max(rect.width, rect.height, 1);
  const maxDist = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(landingRect.width - cx, cy),
    Math.hypot(cx, landingRect.height - cy),
    Math.hypot(landingRect.width - cx, landingRect.height - cy)
  );
  const scale = (maxDist * 3.479) / size;

  link.style.setProperty('--burst-anchor-x', `${Math.round(cx)}px`);
  link.style.setProperty('--burst-anchor-y', `${Math.round(cy)}px`);
  link.style.setProperty('--burst-rest-size', `${Math.round(rect.width)}px`);
  link.style.setProperty('--burst-hover-scale', String(scale));
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
  }
  document.body.classList.toggle('is-landing-expanded', expanded);
}

function initLandingHero() {
  const link = document.getElementById('landing-starburst-link');
  if (!link) return;

  initLandingBurstAnchor(link);

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

  const isTouchLanding = !window.matchMedia('(hover: hover)').matches;
  const launchBtn = link.querySelector('.landing-launch-btn');

  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href') || 'home.html';

    if (isTouchLanding && !document.body.classList.contains('is-landing-expanded')) {
      setLandingExpanded(link, true);
      return;
    }

    if (isTouchLanding && launchBtn && !launchBtn.contains(event.target)) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      navigateToPortfolio(href);
      return;
    }

    void playLandingExit(href, link);
  });
}

function initLandingOrbitTextFit() {
  const path = document.getElementById('landing-orbit-text-path');
  const textPath = document.querySelector('.landing-orbit-text textPath');
  if (!path || !textPath) return;

  const apply = () => {
    const length = path.getTotalLength();
    if (length <= 0) return;
    textPath.setAttribute('textLength', String(length));
    textPath.setAttribute('lengthAdjust', 'spacing');
  };

  apply();
  if (document.fonts?.ready) {
    document.fonts.ready.then(apply);
  }
}

initLandingStarburstMorph();
initLandingHero();
initLandingTransition();
initLandingMetaAlign();
initLandingOrbitTextFit();
