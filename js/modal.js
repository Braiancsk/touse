let alugarButton = document.getElementById('alugar');
let comprarButton = document.getElementById('comprar');
let alugar = document.querySelector('.alugar');
let comprar = document.querySelector('.comprar');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let openModal = document.getElementById('open');
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

openModal.addEventListener('click',()=>{
    modal.classList.add('active');
});

close.addEventListener('click',()=>{
   modal.classList.remove('active');
});

