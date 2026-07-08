function copyEmailToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).catch(() => copyTextFallback(text));
  }

  return Promise.resolve(copyTextFallback(text));
}

function bindEmailLink(emailLink, refreshCursor) {
  if (!emailLink || emailLink.dataset.emailCopyBound === 'true') return;

  emailLink.dataset.emailCopyBound = 'true';

  const emailText = emailLink.querySelector('.email-link-text');
  const email = emailLink.dataset.email || 'hello@tedpio.design';
  const defaultLabel = emailText?.textContent?.trim() || email;
  let copiedTimeout;

  emailLink.setAttribute('role', 'button');
  emailLink.setAttribute('aria-label', `Copy email address ${email}`);

  const showCopiedState = () => {
    emailLink.classList.add('is-copied');
    if (emailText) emailText.textContent = 'Copied to clipboard';
    refreshCursor?.();

    clearTimeout(copiedTimeout);
    copiedTimeout = window.setTimeout(() => {
      emailLink.classList.remove('is-copied');
      if (emailText) emailText.textContent = defaultLabel;
      refreshCursor?.();
    }, 1000);
  };

  const handleCopy = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (emailLink.classList.contains('is-copied')) return;

    showCopiedState();
    void copyEmailToClipboard(email);
  };

  emailLink.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
  });

  emailLink.addEventListener('click', handleCopy);

  emailLink.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    handleCopy(event);
  });
}

function initEmailLink(refreshCursor, root = document) {
  const scope = root instanceof Element || root instanceof Document ? root : document;
  scope.querySelectorAll('[data-email]').forEach((emailLink) => {
    bindEmailLink(emailLink, refreshCursor);
  });
}
