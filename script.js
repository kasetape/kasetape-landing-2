document.addEventListener('DOMContentLoaded', () => {
  const shapes = document.querySelectorAll('.parallax-shape');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    // RequestAnimationFrame for better performance
    window.requestAnimationFrame(() => {
      shapes.forEach(shape => {
        let speed = parseFloat(shape.getAttribute('data-speed'));
        if (!isNaN(speed)) {
          // Simple parallax: Y translate based on scroll amount and speed ratio
          let yPos = -(scrollY * speed * 0.15);
          shape.style.transform = `translateY(${yPos}px)`;
        }
      });
    });
  });
});
