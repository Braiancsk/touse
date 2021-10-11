const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "1",
    centeredSlides: false,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    
    },
  
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

  const swiper2 = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
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


  //scripts para trocar entre vídeos e mapas
  let fotos = document.getElementById('fotos');
  let videos = document.getElementById('videos');
  let mapas = document.getElementById('mapas');
  let videosBtn = document.getElementById('videosBtn');
  let fotosBtn = document.getElementById('fotosBtn');
  let mapasBtn = document.getElementById('mapasBtn');
  videosBtn.addEventListener('click', ()=>{
    videos.classList.add('active');
    fotos.classList.remove('active');
    mapas.classList.remove('active');
  });

  fotosBtn.addEventListener('click', ()=>{
    fotos.classList.add('active');
    videos.classList.remove('active');
    mapas.classList.remove('active');
  });
  
  mapasBtn.addEventListener('click', ()=>{
    mapas.classList.add('active');
    videos.classList.remove('active');
    fotos.classList.remove('active');
  });

 

  



