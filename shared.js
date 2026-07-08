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
