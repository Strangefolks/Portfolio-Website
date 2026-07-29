function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function flushLayout(element) {
  void (element || document.body).offsetHeight;
}

function copyTextFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '0';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

const viewportSyncHandlers = new Set();
let viewportSyncRafId = 0;
let viewportSyncBound = false;

function runViewportSync() {
  if (viewportSyncRafId) return;

  viewportSyncRafId = requestAnimationFrame(() => {
    viewportSyncRafId = 0;
    viewportSyncHandlers.forEach((handler) => handler());
  });
}

function registerViewportSync(handler) {
  viewportSyncHandlers.add(handler);
  if (viewportSyncBound) return;

  viewportSyncBound = true;
  window.addEventListener('resize', runViewportSync);
  window.addEventListener('orientationchange', runViewportSync);
  window.visualViewport?.addEventListener('resize', runViewportSync);
  window.visualViewport?.addEventListener('scroll', runViewportSync);
}

const STARBURST_MORPH_CENTER = { x: 91, y: 91 };

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

function initStarburstMorph(pathEl, options = {}) {
  if (!pathEl) return null;

  const {
    center = STARBURST_MORPH_CENTER,
    getSpeeds = () => ({ motion: 4, warp: 5 }),
    speedRampRate = 6,
  } = options;

  const segments = parseSvgPath(pathEl.getAttribute('d') || '');
  if (!segments.length) return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  let rafId = 0;
  let running = false;
  let isPaused = false;
  let warpPhase = 0;
  let rotationPhase = 0;
  let lastTick = 0;
  let motionSpeed = 1;
  let warpSpeed = 1;

  const tick = (now) => {
    rafId = 0;

    if (running && !isPaused) {
      const dt = lastTick ? Math.min(0.05, (now - lastTick) / 1000) : 0;
      lastTick = now;

      const speeds = getSpeeds() || {};
      const targetMotion = Number.isFinite(speeds.motion) ? speeds.motion : 4;
      const targetWarp = Number.isFinite(speeds.warp) ? speeds.warp : 5;
      const blend = dt > 0 ? 1 - Math.exp(-speedRampRate * dt) : 0;

      motionSpeed += (targetMotion - motionSpeed) * blend;
      warpSpeed += (targetWarp - warpSpeed) * blend;
      warpPhase += dt * warpSpeed;
      rotationPhase += dt * motionSpeed;

      pathEl.setAttribute(
        'd',
        buildMorphedStarburstPath(segments, warpPhase, center, rotationPhase)
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
  };

  document.addEventListener('visibilitychange', () => {
    isPaused = document.visibilityState !== 'visible';
    if (!isPaused && running) {
      lastTick = 0;
    }
  });

  start();

  return { start, stop };
}
