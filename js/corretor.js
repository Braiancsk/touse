let alugarButton = document.getElementById('alugar');
let comprarButton = document.getElementById('comprar');
let alugar = document.querySelector('.alugar');
let comprar = document.querySelector('.comprar');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let openBtn = document.getElementById('openBtn');
let bgModal = document.querySelector('.bg-modal');
let mapaBtn = document.getElementById("mapa");
let colMapa = document.getElementById('colMapa');
let cards = document.getElementById('cards');
let footer = document.querySelector('footer');
//script para abrir modal

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

//abrir modal quando clicar no botão filtro
openBtn.addEventListener('click',()=>{
    modal.classList.add('active');
    colMapa.classList.remove('map-active');
    cards.classList.add('active-cards');
    bgModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    alugar.classList.add('active');
    footer.style.marginTop = '108px';
});


//fechar modal ao clicar no x
close.addEventListener('click',()=>{
   modal.classList.remove('active');
   document.body.style.overflow = 'auto';
   bgModal.style.display = 'none';
   footer.style.marginTop = '108px';
});


//fechar modal quando clicar de fora
bgModal.addEventListener('click',()=>{
    modal.classList.remove('active');
    bgModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    footer.style.marginTop = '108px';
})



//script para ativar e desativar o mapa

    btnMapa.addEventListener('click',()=>{
        colMapa.classList.add('map-active');
        cards.classList.remove('active-cards');
        footer.style.marginTop = '0px';
});
