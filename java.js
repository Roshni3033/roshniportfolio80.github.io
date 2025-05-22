const imageSwiper = new Swiper('.portfolio-details-slider', {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

const infoSwiper = new Swiper('.project-info-slider', {
  loop: true,
  speed: 600,
  slidesPerView: 1
});

// Synchronize the sliders
imageSwiper.on('slideChange', function () {
  infoSwiper.slideTo(imageSwiper.realIndex);
});

infoSwiper.on('slideChange', function () {
  imageSwiper.slideTo(infoSwiper.realIndex);
});