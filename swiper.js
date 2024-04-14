const section2swiper = new Swiper(".section2_swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: "auto",
    grabCursor: true,
  
    breakpoints: {
      655: {
        slidesPerView: 2,
      },
  
      976: {
        slidesPerView: 3,
      },
    },
  });