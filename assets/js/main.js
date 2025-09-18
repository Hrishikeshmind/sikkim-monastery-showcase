// Minimal interactivity for the demo landing page
(function () {
  const slides = document.querySelectorAll('.hero__slides button');
  slides.forEach((btn) => {
    btn.addEventListener('click', () => {
      slides.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
})();

