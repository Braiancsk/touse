const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 10,
    freeMode: true,
        breakpoints: {
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },    
          },
  });