(function () {
  const nav = performance.getEntriesByType('navigation')[0];
  if (!nav || nav.type !== 'reload') return;

  const file = window.location.pathname.split('/').pop() || 'index.html';
  if (file === '' || file === 'index.html') return;

  window.location.replace('index.html');
})();
