let eye = document.getElementById('modal-1');
let eye2 = document.getElementById('modal-2');
let eye3 = document.getElementById('modal-3');

eye.addEventListener('click', ()=>{
        Swal.fire({
            template: '#my-template'
          })   
})

eye2.addEventListener('click', ()=>{
    Swal.fire({
        template: '#my-template2'
      })   
})

eye3.addEventListener('click', ()=>{
    Swal.fire({
        template: '#my-template3'
      })   
})

