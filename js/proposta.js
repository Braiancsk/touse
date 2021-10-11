 //scripts para abrir modal de proposta
 let modalBtn = document.getElementById('propostaButton');
 let modalBtnMobile = document.getElementById('propostaButtonMobile');
 let modal = document.getElementById('modal');
 let close = document.getElementById('close');
 let cancelar = document.getElementById('cancelar');


 modalBtn.addEventListener('click', ()=>{
   modal.classList.add('modal-active');
 });

 modalBtnMobile.addEventListener('click', ()=>{
  modal.classList.add('modal-active');
});

 close.addEventListener('click',()=>{
   modal.classList.remove('modal-active');
 });

 
 cancelar.addEventListener('click',()=>{
   e.preventDefault();
   modal.classList.remove('modal-active');
 });
