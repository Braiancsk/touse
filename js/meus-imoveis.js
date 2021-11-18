let favoritosButton = document.getElementById('btn-favoritos');
let descartadosButton = document.getElementById('btn-descartados');
let aprovadosButton = document.getElementById('btn-aprovados');
let favoritos= document.getElementById('favoritos');
let descartados = document.getElementById('descartados');
let aprovados = document.getElementById('aprovados');


descartadosButton.addEventListener('click',()=>{
    descartados.classList.add('show');
    descartadosButton.classList.add('active');
    favoritos.classList.remove('show');
    favoritosButton.classList.remove('active');
    aprovados.classList.remove('show');
    aprovadosButton.classList.remove('active');
});

favoritosButton.addEventListener('click',()=>{
    descartados.classList.remove('show');
    descartadosButton.classList.remove('active');
    favoritos.classList.add('show');
    favoritosButton.classList.add('active');
    aprovados.classList.remove('show');
    aprovadosButton.classList.remove('active');
});

aprovadosButton.addEventListener('click',()=>{
    aprovados.classList.add('show');
    aprovadosButton.classList.add('active');
    descartados.classList.remove('show');
    descartadosButton.classList.remove('active');
    favoritos.classList.remove('show');
    favoritosButton.classList.remove('active');
});

const swiper4 = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 10,
    freeMode: true,
        breakpoints: {
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },    
          },
  });

  const swiper5 = new Swiper('.swiper2', {
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