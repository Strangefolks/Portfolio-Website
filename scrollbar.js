const CUSTOM_SCROLLBAR_SELECTORS = [
  '.project-list',
  '.main',
  '.project-info-tooltip-copy',
  '.about-panel-right',
  '.profile-panel-right',
];

const customScrollbarStates = new WeakMap();

const CUSTOM_SCROLLBAR_THUMB_LENGTH = 20;

function getCustomScrollbarMetrics(scrollable) {
  const { scrollTop, scrollHeight, clientHeight } = scrollable;
  const maxScroll = Math.max(0, scrollHeight - clientHeight);
  const trackLength = Math.max(0, clientHeight - CUSTOM_SCROLLBAR_THUMB_LENGTH);

  return { scrollTop, maxScroll, trackLength, clientHeight };
}

function syncCustomScrollbar(scrollable) {
  const state = customScrollbarStates.get(scrollable);
  if (!state) return;

  const { rail, thumb } = state;
  const { scrollTop, maxScroll, trackLength, clientHeight } = getCustomScrollbarMetrics(scrollable);

  if (maxScroll <= 1 || clientHeight <= 0) {
    rail.hidden = true;
    thumb.style.transform = 'translate3d(0, 0, 0)';
    return;
  }

  rail.hidden = false;
  const thumbOffset = maxScroll > 0 ? (scrollTop / maxScroll) * trackLength : 0;
  thumb.style.transform = `translate3d(0, ${thumbOffset}px, 0)`;
}

function bindCustomScrollbar(scrollable) {
  if (!scrollable || scrollable.dataset.customScrollbarBound === 'true') return;

  const wrap = document.createElement('div');
  wrap.className = 'custom-scrollbar-wrap';

  const parent = scrollable.parentNode;
  if (!parent) return;

  parent.insertBefore(wrap, scrollable);
  wrap.appendChild(scrollable);
  scrollable.classList.add('custom-scrollbar-viewport');

  const rail = document.createElement('div');
  rail.className = 'custom-scrollbar-rail';
  rail.setAttribute('aria-hidden', 'true');

  const thumb = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';
  rail.appendChild(thumb);
  wrap.appendChild(rail);

  scrollable.dataset.customScrollbarBound = 'true';

  const state = { wrap, rail, thumb };
  customScrollbarStates.set(scrollable, state);

  const scheduleSync = () => {
    requestAnimationFrame(() => syncCustomScrollbar(scrollable));
  };

  scrollable.addEventListener('scroll', scheduleSync, { passive: true });
  window.addEventListener('resize', scheduleSync);

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(scheduleSync);
    resizeObserver.observe(scrollable);
    if (scrollable.firstElementChild) {
      resizeObserver.observe(scrollable.firstElementChild);
    }
    state.resizeObserver = resizeObserver;
  }

  const mutationObserver = new MutationObserver(scheduleSync);
  mutationObserver.observe(scrollable, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  state.mutationObserver = mutationObserver;

  thumb.addEventListener('pointerdown', (event) => {
    event.preventDefault();

    const { maxScroll, trackLength } = getCustomScrollbarMetrics(scrollable);
    if (maxScroll <= 0 || trackLength <= 0) return;

    const startY = event.clientY;
    const startScrollTop = scrollable.scrollTop;
    thumb.setPointerCapture(event.pointerId);

    const handlePointerMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startY;
      scrollable.scrollTop = startScrollTop + (deltaY / trackLength) * maxScroll;
    };

    const handlePointerUp = () => {
      thumb.removeEventListener('pointermove', handlePointerMove);
      thumb.removeEventListener('pointerup', handlePointerUp);
      thumb.removeEventListener('pointercancel', handlePointerUp);
    };

    thumb.addEventListener('pointermove', handlePointerMove);
    thumb.addEventListener('pointerup', handlePointerUp);
    thumb.addEventListener('pointercancel', handlePointerUp);
  });

  scheduleSync();
}

function initCustomScrollbars(root = document) {
  CUSTOM_SCROLLBAR_SELECTORS.forEach((selector) => {
    root.querySelectorAll(selector).forEach((element) => {
      if (element.classList.contains('custom-scrollbar-viewport')) return;
      bindCustomScrollbar(element);
    });
  });
}

function refreshCustomScrollbar(scrollable) {
  if (!scrollable) return;
  syncCustomScrollbar(scrollable);
}
