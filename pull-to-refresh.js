(function () {
  'use strict';

  const THRESHOLD = 72;
  const MAX_PULL = 128;
  const RESISTANCE = 0.44;
  const SNAP_DURATION_MS = 320;

  const MOBILE_MQ = window.matchMedia('(max-width: 560px), (hover: none), (pointer: coarse)');

  let indicator = null;
  let startY = 0;
  let pullDistance = 0;
  let activeScrollEl = null;
  let isDragging = false;
  let isRefreshing = false;
  let enabled = false;

  function isMobilePullToRefresh() {
    return MOBILE_MQ.matches;
  }

  function isScrollable(el) {
    if (!el || el === document.body) return false;
    const style = getComputedStyle(el);
    const overflowY = style.overflowY;
    if (overflowY !== 'auto' && overflowY !== 'scroll') return false;
    return el.scrollHeight > el.clientHeight + 1;
  }

  function findScrollableAncestor(el) {
    let node = el instanceof Element ? el : null;
    while (node && node !== document.documentElement) {
      if (isScrollable(node)) return node;
      node = node.parentElement;
    }
    return null;
  }

  function resolveScrollRoot(target) {
    const scrollable = findScrollableAncestor(target);
    if (scrollable) return scrollable;

    if (
      document.body.classList.contains('landing-page')
      || document.body.classList.contains('about-page')
      || document.body.classList.contains('profile-page')
    ) {
      const layout = document.querySelector('.about-layout, .profile-layout, .landing');
      if (layout && isScrollable(layout)) return layout;
    }

    if (document.body.classList.contains('landing-page')) {
      return document.documentElement;
    }

    const main = document.getElementById('main-content') || document.querySelector('.main');
    if (main && getComputedStyle(main).overflowY !== 'hidden') return main;

    if (document.body.classList.contains('is-about-open')) {
      return document.querySelector('.about-stage .about-layout');
    }

    if (document.body.classList.contains('is-profile-open')) {
      return document.querySelector('.profile-stage .profile-layout');
    }

    return main;
  }

  function getScrollTop(el) {
    if (!el || el === document.documentElement) return window.scrollY || 0;
    return el.scrollTop;
  }

  function shouldIgnoreTouch(target) {
    if (!(target instanceof Element)) return true;
    if (document.body.classList.contains('is-sketchbook-lightbox-open')) return true;
    if (target.closest('.sketchbook-lightbox, .project-info-tooltip')) return true;
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return true;
    return false;
  }

  function applyResistance(distance) {
    return Math.min(MAX_PULL, distance * RESISTANCE);
  }

  function createIndicator() {
    const root = document.createElement('div');
    root.className = 'pull-to-refresh-indicator';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = '<span class="pull-to-refresh-indicator__shape"></span>';
    document.body.appendChild(root);
    return root;
  }

  function setIndicatorPull(distance, { animate = false } = {}) {
    if (!indicator) return;

    const progress = Math.min(1, distance / THRESHOLD);
    indicator.classList.toggle('is-visible', distance > 0);
    indicator.classList.toggle('is-ready', distance >= THRESHOLD);
    indicator.classList.toggle('is-snapping', animate);

    indicator.style.setProperty('--pull-offset', `${distance}px`);
    indicator.style.setProperty('--pull-progress', String(progress));
  }

  function snapIndicator(callback) {
    if (!indicator) {
      callback?.();
      return;
    }

    setIndicatorPull(0, { animate: true });
    window.setTimeout(() => {
      indicator?.classList.remove('is-snapping', 'is-visible', 'is-ready');
      callback?.();
    }, SNAP_DURATION_MS);
  }

  function resetGesture() {
    isDragging = false;
    pullDistance = 0;
    activeScrollEl = null;
    startY = 0;
  }

  function reloadPage() {
    isRefreshing = true;
    setIndicatorPull(0, { animate: true });
    window.setTimeout(() => {
      window.location.reload();
    }, SNAP_DURATION_MS);
  }

  function onTouchStart(event) {
    if (!enabled || isRefreshing) return;
    if (event.touches.length !== 1) return;
    if (shouldIgnoreTouch(event.target)) return;

    activeScrollEl = resolveScrollRoot(event.target);
    if (!activeScrollEl) return;
    if (getScrollTop(activeScrollEl) > 0) return;

    startY = event.touches[0].clientY;
    isDragging = false;
    pullDistance = 0;
  }

  function onTouchMove(event) {
    if (!enabled || isRefreshing || !activeScrollEl) return;
    if (event.touches.length !== 1) return;
    if (getScrollTop(activeScrollEl) > 0) {
      if (isDragging) {
        setIndicatorPull(0);
        resetGesture();
      }
      return;
    }

    const deltaY = event.touches[0].clientY - startY;
    if (deltaY <= 0) {
      if (isDragging) setIndicatorPull(0);
      isDragging = false;
      pullDistance = 0;
      return;
    }

    isDragging = true;
    pullDistance = applyResistance(deltaY);
    setIndicatorPull(pullDistance);
    event.preventDefault();
  }

  function onTouchEnd() {
    if (!enabled || isRefreshing) return;

    if (isDragging && pullDistance >= THRESHOLD) {
      reloadPage();
      return;
    }

    if (isDragging) snapIndicator();
    resetGesture();
  }

  function bind() {
    if (enabled) return;
    enabled = true;
    document.body.classList.add('has-pull-to-refresh');
    if (!indicator) indicator = createIndicator();

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    document.addEventListener('touchcancel', onTouchEnd, { passive: true });
  }

  function unbind() {
    if (!enabled) return;
    enabled = false;
    document.body.classList.remove('has-pull-to-refresh');
    resetGesture();
    setIndicatorPull(0);

    document.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
    document.removeEventListener('touchcancel', onTouchEnd);
  }

  function syncEnabledState() {
    if (isMobilePullToRefresh()) bind();
    else unbind();
  }

  if (typeof MOBILE_MQ.addEventListener === 'function') {
    MOBILE_MQ.addEventListener('change', syncEnabledState);
  } else if (typeof MOBILE_MQ.addListener === 'function') {
    MOBILE_MQ.addListener(syncEnabledState);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncEnabledState, { once: true });
  } else {
    syncEnabledState();
  }
})();
