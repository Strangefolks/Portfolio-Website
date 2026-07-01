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
