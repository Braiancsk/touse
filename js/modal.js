let alugarButton = document.getElementById('alugar');
let comprarButton = document.getElementById('comprar');
let alugar = document.querySelector('.alugar');
let comprar = document.querySelector('.comprar');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let openModal = document.getElementById('open');
let bgModal = document.querySelector('.bg-modal');
    if('alugarButton = checked'){
        alugar.classList.toggle('active');
    }


comprarButton.addEventListener('click',()=>{
    if('comprarButton = checked'){
        comprar.classList.add('active');
        alugar.classList.remove('active');
    }
});

alugarButton.addEventListener('click',()=>{
    if('alugarButton = checked'){
        alugar.classList.add('active');
        comprar.classList.remove('active');
    }
});


//script para abrir modal

openModal.addEventListener('click',()=>{
    modal.classList.add('active');
    col2.classList.remove('map-active');
    cards.classList.add('active-cards');
    document.body.style.overflow = 'hidden';
    bgModal.style.display = 'block';
    footerTop.style.marginTop = '108px';
});

close.addEventListener('click',()=>{
   modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   col2.classList.remove('map-active');
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
});

//script para fechar modal ao clicar fora

bgModal.addEventListener('click',()=>{
    modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   col2.classList.remove('map-active');
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
});

let mapaBtn = document.getElementById("mapa");
let col2 = document.getElementById('col2');
let cards = document.getElementById('cards');
let footerTop = document.getElementById('footer-map');
let wrapper = document.getElementById('wrapper');
let cardsActive = document.querySelectorAll('article');
let firstCol = document.getElementById('first-col');
let mapCol = document.getElementById('property-listing-map');


    mapaBtn.addEventListener('click',()=>{
        col2.classList.add('map-active');
        footerTop.style.marginTop = '0px';
        cards.classList.remove('active-cards');
});
