

document.addEventListener("DOMContentLoaded", () => {
  const myCarousel = document.querySelector('#mainCarousel');
  if (myCarousel) {
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: 'carousel',
      pause: false
    });

    myCarousel.addEventListener("mouseenter", () => carousel.pause());
    myCarousel.addEventListener("mouseleave", () => carousel.cycle());
  }
});