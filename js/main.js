const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        freeMode: true,

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

  //script para acionar o menu mobile
  let burgerBox = document.querySelector('.hamburger-wrapper');
  let burger = document.querySelector('.hamburger');
  let menu = document.querySelector('.menu-mobile');
  let bg = document.querySelector('.bg');


  burgerBox.addEventListener('click', ()=>{
    burger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    if(burger.classList.contains('is-active')){
      document.body.style.overflow = 'hidden';
      bg.style.display = 'block';
    }else{
      document.body.style.overflow = 'auto';
      bg.style.display = 'none';
    }
  });

  