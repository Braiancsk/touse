let favoritosButton = document.getElementById('btn-favoritos');
let descartadosButton = document.getElementById('btn-descartados');
let favoritos= document.getElementById('favoritos');
let descartados = document.getElementById('descartados');


descartadosButton.addEventListener('click',()=>{
    descartados.classList.add('show');
    descartadosButton.classList.add('active');
    favoritos.classList.remove('show');
    favoritosButton.classList.remove('active');
});

favoritosButton.addEventListener('click',()=>{
    descartados.classList.remove('show');
    descartadosButton.classList.remove('active');
    favoritos.classList.add('show');
    favoritosButton.classList.add('active');
});