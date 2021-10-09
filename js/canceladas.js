const swiper2 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    watchSlidesProgress: true,
    slidesPerView: "1",
    centeredSlides: false,
    spaceBetween: 10,
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
   });