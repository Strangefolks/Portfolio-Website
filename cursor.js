function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return () => {};

  const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], .project-item, .project-item-info, .filter-pill, .theme-toggle, .view-toggle-btn, .mobile-project-nav-btn, .logo, .footer-link, .email-link, .avatar, .profile-avatar-trigger, .project-lock-gate-submit, .project-lock-gate-input, .header-shade-close, .about-close, .profile-close, .landing-starburst-link';

  const RESIZE_SELECTOR = '.sidebar-resizer';

  const cursorLabel = dot.querySelector('.cursor-dot-label');

  let isOverInteractive = false;
  let isOverPill = false;
  let isOverLandingLaunch = false;
  let isOverAboutBlue = false;
  let isOverAboutLogo = false;
  let isPressed = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = 0;
  let hasInitializedPosition = false;

  function updateCursorState() {
    dot.classList.toggle('is-copy-pill', isOverPill && !isPressed);
    dot.classList.toggle(
      'is-hover',
      isOverInteractive && !isPressed && !isOverPill && !isOverLandingLaunch
    );
    dot.classList.toggle('is-landing-launch', isOverLandingLaunch);
    dot.classList.toggle('is-active', isPressed);
    dot.classList.toggle('is-about-blue', isOverAboutBlue && !isOverAboutLogo && !isPressed && !isOverPill);
    dot.classList.toggle('is-about-logo', isOverAboutLogo && !isPressed && !isOverPill);
  }

  function renderCursorPosition() {
    dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
  }

  function getCursorLerpFactor(distance) {
    if (distance > 100) return 0.22;
    if (distance > 30) return 0.22 + ((100 - distance) / 70) * 0.13;
    return 0.35 + ((30 - distance) / 30) * 0.3;
  }

  function tickCursorPosition() {
    rafId = 0;

    const dx = targetX - currentX;
    const dy = targetY - currentY;
    const distance = Math.hypot(dx, dy);

    if (distance < 0.35) {
      currentX = targetX;
      currentY = targetY;
      renderCursorPosition();
      return;
    }

    const factor = getCursorLerpFactor(distance);
    currentX += dx * factor;
    currentY += dy * factor;
    renderCursorPosition();
    rafId = requestAnimationFrame(tickCursorPosition);
  }

  function startCursorAnimation() {
    if (!rafId) rafId = requestAnimationFrame(tickCursorPosition);
  }

  function stopCursorAnimation() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  function syncCursorFromPoint(clientX, clientY) {
    lastPointerX = clientX;
    lastPointerY = clientY;
    targetX = clientX;
    targetY = clientY;

    if (!hasInitializedPosition) {
      currentX = clientX;
      currentY = clientY;
      hasInitializedPosition = true;
      renderCursorPosition();
    } else {
      startCursorAnimation();
    }

    const target = document.elementFromPoint(clientX, clientY);
    const isOverResizer = Boolean(target?.closest(RESIZE_SELECTOR));
    const isResizing = document.body.classList.contains('is-resizing');

    if (isOverResizer || isResizing) {
      dot.classList.remove('is-visible');
      return;
    }

    dot.classList.add('is-visible');

    const emailLink = target?.closest('.email-link');

    if (emailLink && !emailLink.classList.contains('is-copied')) {
      isOverPill = true;
      if (cursorLabel) cursorLabel.textContent = 'Copy';
    } else {
      isOverPill = false;
    }

    isOverInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
    isOverLandingLaunch = Boolean(target?.closest('.landing-launch-btn'));

    const isAboutContext =
      document.body.classList.contains('about-page') ||
      document.body.classList.contains('is-about-open') ||
      document.body.classList.contains('profile-page') ||
      document.body.classList.contains('is-profile-open');

    if (isAboutContext) {
      isOverAboutLogo = Boolean(target?.closest('.about-logo-mark, .profile-portrait-photo'));
      isOverAboutBlue = Boolean(target?.closest('.about-layer--blue, .profile-layer--blue'));
    } else {
      isOverAboutLogo = false;
      isOverAboutBlue = false;
    }

    updateCursorState();
  }

  document.addEventListener(
    'mousemove',
    (e) => {
      syncCursorFromPoint(e.clientX, e.clientY);
    },
    { passive: true }
  );

  document.addEventListener('mousedown', () => {
    isPressed = true;
    updateCursorState();
  });

  document.addEventListener('mouseup', () => {
    isPressed = false;
    updateCursorState();
  });

  document.documentElement.addEventListener('mouseleave', () => {
    dot.classList.remove('is-visible');
    stopCursorAnimation();
  });

  document.documentElement.addEventListener('mouseenter', () => {
    dot.classList.add('is-visible');
    if (hasInitializedPosition) startCursorAnimation();
  });

  return () => syncCursorFromPoint(lastPointerX, lastPointerY);
}
