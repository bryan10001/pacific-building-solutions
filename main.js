/* Pacific Building Solutions — v2 */
(function () {
  'use strict';

  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Smooth scroll for same-page anchors (respects sticky header)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var header = document.querySelector('.site-header');
      var offset = header ? header.offsetHeight + 8 : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Project galleries (supports multiple [data-gallery] blocks)
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var track = gallery.querySelector('.gallery__track');
    var slides = gallery.querySelectorAll('.gallery__slide');
    var currentEl = gallery.querySelector('[data-gallery-current]');
    var totalEl = gallery.querySelector('[data-gallery-total]');
    var prev = gallery.querySelector('[data-gallery-prev]');
    var next = gallery.querySelector('[data-gallery-next]');
    var index = 0;
    var total = slides.length;
    if (!total) return;

    if (totalEl) totalEl.textContent = String(total);

    function go(i) {
      index = (i + total) % total;
      if (track) track.style.transform = 'translateX(' + (-index * 100) + '%)';
      if (currentEl) currentEl.textContent = String(index + 1);
    }

    if (prev) prev.addEventListener('click', function () { go(index - 1); });
    if (next) next.addEventListener('click', function () { go(index + 1); });
    go(0);
  });
})();
