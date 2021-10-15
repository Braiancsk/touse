let alugarButton = document.getElementById('alugar');
let comprarButton = document.getElementById('comprar');
let alugar = document.querySelector('.alugar');
let comprar = document.querySelector('.comprar');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let openModal = document.getElementById('open');
let bgModal = document.querySelector('.bg-modal');
let divide = document.getElementById('divide');
// Size of browser viewport.
let janela = $(window).width();


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
    cards.classList.add('active-cards');
    document.body.style.overflow = 'hidden';
    bgModal.style.display = 'block';
    footerTop.style.marginTop = '108px';
    if(janela <= 768){
        col2.classList.remove('map-active');
    }
});

close.addEventListener('click',()=>{
   modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
   if(janela <= 768){
    col2.classList.remove('map-active');
}

});

//script para fechar modal ao clicar fora

bgModal.addEventListener('click',()=>{
    modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
   if(janela <= 768){
    col2.classList.remove('map-active');
}

});

let mapaBtn = document.getElementById("mapa");
let col2 = document.getElementById('col2');
let cards = document.getElementById('cards');
let footerTop = document.getElementById('footer-map');
let firstCol = document.getElementById('first-col');
let mapCol = document.getElementById('property-listing-map');
let cardsDivide = document.querySelectorAll('article');
let resetMap = document.getElementById('property-listing-map');

    mapaBtn.addEventListener('click',()=>{
        col2.classList.add('map-active');
        footerTop.style.marginTop = '0px';
        if(janela <= 768){ 
            cards.classList.remove('active-cards');
            col2.classList.add('reset');
        }       
});

   

//detect de size of the screen
if(janela <= 768){
    col2.classList.remove('map-active');
    if("col2.classList.contains('map-active')"){
        for(var i = 0; i < cardsDivide.length; i++){
            cardsDivide[i].classList.add('cardsDivide');
        }
        col2.classList.add('reset');
        resetMap.classList.add('reset');

    }else if("cards.classList.contains('active-cards')"){
        col2.classList.remove('map-active');
        cards.classList.add('reset');
    } 
    
    console.log(janela);
} 

if(janela >= 900){
    for(var i = 0; i < cardsDivide.length; i++){
        cardsDivide[i].classList.add('cardsDivide');
    }
}


