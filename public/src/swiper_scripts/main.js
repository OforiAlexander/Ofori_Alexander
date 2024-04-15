var swiper = new Swiper(".project", {
    slidesPerView: 1,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });