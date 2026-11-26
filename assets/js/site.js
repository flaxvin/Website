/* Shared page behaviour: the menu button under 72rem and the footer year. Content never depends on it. */
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');
  if (burger && nav) {
    var close = function () { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.matchMedia('(max-width: 72rem)').matches) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { close(); burger.focus(); }
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
