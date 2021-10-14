 //scripts para abrir modal de proposta
 let modalBtn = document.getElementById('propostaButton');
 let modalBtnMobile = document.getElementById('propostaButtonMobile');
 let modal = document.getElementById('modal');
 let close = document.getElementById('close');
 let cancelar = document.getElementById('cancelar');
 let bgModal = document.querySelector('.bg-modal');

 modalBtn.addEventListener('click', ()=>{
   modal.classList.add('modal-active');
   bgModal.style.display = 'block';
   document.body.style.overflow = 'hidden';
 });

 modalBtnMobile.addEventListener('click', ()=>{
  modal.classList.add('modal-active');
  bgModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

 close.addEventListener('click',()=>{
   modal.classList.remove('modal-active');
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
 });

 bgModal.addEventListener('click', ()=>{
  modal.classList.remove('modal-active');
  bgModal.style.display = 'none';
  document.body.style.overflow = 'auto';
 })

 
 cancelar.addEventListener('click',()=>{
   e.preventDefault();
   modal.classList.remove('modal-active');
 });
