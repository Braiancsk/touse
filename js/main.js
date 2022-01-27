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
let alugarBtn = document.getElementById('alugar');
let comprarBtn = document.getElementById('comprar');

temporadaBtn.addEventListener('change', ()=>{
  if(temporadaBtn.checked){
    console.log(temporadaBtn.id)
    localidades.style.display = 'none';
    temporada.style.display = 'block';
  }
});

alugarBtn.addEventListener('change', ()=>{
  if(alugarBtn.checked){
    console.log(alugarBtn.id)
    localidades.style.display = 'block';
    temporada.style.display = 'none';
  }
});

comprarBtn.addEventListener('change', ()=>{
  if(comprarBtn.checked){
    console.log(comprarBtn.id)
    localidades.style.display = 'block';
    temporada.style.display = 'none';
  }
});

  