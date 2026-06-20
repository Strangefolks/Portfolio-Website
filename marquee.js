const TOP_BANNER_MARQUEE_TEXT =
  'Welcome to the portfolio of Ted Pioli: Product & Brand designer';

function createMarqueeTextSpan(text) {
  const span = document.createElement('span');
  span.className = 'marquee-text';
  span.textContent = text;
  return span;
}

function createMarqueeDot() {
  const dot = document.createElement('span');
  dot.className = 'marquee-text-dot';
  dot.setAttribute('aria-hidden', 'true');
  return dot;
}

function appendMarqueeUnit(parent) {
  parent.appendChild(createMarqueeTextSpan(TOP_BANNER_MARQUEE_TEXT));
  parent.appendChild(createMarqueeDot());
}

function populateTopBannerMarquee() {
  const track = document.getElementById('top-banner-marquee-track');
  const shell = document.getElementById('top-banner-shell');
  if (!track) return;

  const marquee = track.parentElement;
  const width = marquee?.clientWidth || shell?.clientWidth || window.innerWidth;
  if (width <= 0) return;

  track.innerHTML = '';

  appendMarqueeUnit(track);

  let guard = 1;
  while (track.scrollWidth < width && guard < 48) {
    appendMarqueeUnit(track);
    guard += 1;
  }

  const firstCopy = Array.from(track.children);
  firstCopy.forEach((child) => {
    const clone = child.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}

let topBannerMarqueeResizeTimer;

function syncTopBannerRevealEdge() {
  const edge = document.getElementById('top-banner-reveal-edge');
  if (!edge) return;

  const bannerHidden = document.body.classList.contains('is-top-banner-hidden');
  edge.hidden = !bannerHidden;
  edge.setAttribute('aria-hidden', bannerHidden ? 'false' : 'true');
}

function showTopBanner() {
  const shell = document.getElementById('top-banner-shell');
  document.body.classList.remove('is-top-banner-hidden');
  shell?.setAttribute('aria-hidden', 'false');
  syncTopBannerRevealEdge();
}

function initTopBannerDismiss() {
  const shell = document.getElementById('top-banner-shell');
  if (!shell || shell.dataset.dismissBound === 'true') return;

  shell.dataset.dismissBound = 'true';
  shell.setAttribute('role', 'button');
  shell.setAttribute('tabindex', '0');
  shell.setAttribute('aria-label', 'Hide announcement banner');

  const hideTopBanner = () => {
    document.body.classList.add('is-top-banner-hidden');
    shell.setAttribute('aria-hidden', 'true');
    syncTopBannerRevealEdge();
  };

  shell.addEventListener('click', hideTopBanner);
  shell.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      hideTopBanner();
    }
  });
}

function initTopBannerReveal() {
  const edge = document.getElementById('top-banner-reveal-edge');
  if (!edge || edge.dataset.revealBound === 'true') return;

  edge.dataset.revealBound = 'true';

  edge.addEventListener('click', showTopBanner);
  edge.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showTopBanner();
    }
  });

  syncTopBannerRevealEdge();
}

function initTopBannerMarquee() {
  const track = document.getElementById('top-banner-marquee-track');
  if (!track) return;

  const run = () => populateTopBannerMarquee();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    requestAnimationFrame(run);
  }

  window.addEventListener('resize', () => {
    window.clearTimeout(topBannerMarqueeResizeTimer);
    topBannerMarqueeResizeTimer = window.setTimeout(() => {
      populateTopBannerMarquee();
    }, 120);
  });
}

window.populateTopBannerMarquee = populateTopBannerMarquee;

initTopBannerMarquee();
initTopBannerDismiss();
initTopBannerReveal();

function syncBottomBannerRevealEdge() {
  const edge = document.getElementById('bottom-banner-reveal-edge');
  if (!edge) return;

  const bannerHidden = document.body.classList.contains('is-bottom-banner-hidden');
  edge.hidden = !bannerHidden;
  edge.setAttribute('aria-hidden', bannerHidden ? 'false' : 'true');
}

function showBottomBanner() {
  const reveal = document.getElementById('footer-reveal');
  document.body.classList.remove('is-bottom-banner-hidden');
  reveal?.setAttribute('aria-hidden', 'false');
  syncBottomBannerRevealEdge();
}

function initBottomBannerDismiss() {
  const reveal = document.getElementById('footer-reveal');
  if (!reveal || reveal.dataset.dismissBound === 'true') return;

  reveal.dataset.dismissBound = 'true';
  reveal.setAttribute('role', 'button');
  reveal.setAttribute('tabindex', '0');
  reveal.setAttribute('aria-label', 'Hide services banner');

  const hideBottomBanner = () => {
    document.body.classList.add('is-bottom-banner-hidden');
    reveal.setAttribute('aria-hidden', 'true');
    syncBottomBannerRevealEdge();
  };

  reveal.addEventListener('click', hideBottomBanner);
  reveal.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      hideBottomBanner();
    }
  });
}

function initBottomBannerReveal() {
  const edge = document.getElementById('bottom-banner-reveal-edge');
  if (!edge || edge.dataset.revealBound === 'true') return;

  edge.dataset.revealBound = 'true';

  edge.addEventListener('click', showBottomBanner);
  edge.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showBottomBanner();
    }
  });

  syncBottomBannerRevealEdge();
}

initBottomBannerDismiss();
initBottomBannerReveal();
