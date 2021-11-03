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

//scripts para inputs de temporada ou alugar/comprar

let temporada = document.querySelector('.temporada');
let localidades = document.querySelector('.localidades');
let temporadaBtn = document.getElementById('temporada');
let alugarBtn = document.getElementById('flexRadioDefault1');
let comprarBtn = document.getElementById('flexRadioDefault2');

temporadaBtn.addEventListener('click', ()=>{
  if(temporadaBtn.checked){
    localidades.style.display = 'none';
    temporada.style.display = 'block';
  }
});

alugarBtn.addEventListener('click', ()=>{
  if(alugarBtn.checked){
    localidades.style.display = 'block';
    temporada.style.display = 'none';
  }
});

comprarBtn.addEventListener('click', ()=>{
  if(comprarBtn.checked){
    localidades.style.display = 'block';
    temporada.style.display = 'none';
  }
});

  