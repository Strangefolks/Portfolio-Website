(function () {
  var theme = 'light';
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
