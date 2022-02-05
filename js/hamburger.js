//script para acionar o menu mobile
let burgerBox = document.querySelector('.hamburger-wrapper');
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu-mobile');
let bg = document.querySelector('.bg');
let cadastrar = document.querySelectorAll('[data-cadastrar]')
let login = document.querySelectorAll('[data-login]')


cadastrar.forEach(btn =>{
  btn.addEventListener('click',()=>{
    handleCloseMenu()
  })
})

login.forEach(btn =>{
  btn.addEventListener('click',()=>{
    handleCloseMenu()
  })
})

burgerBox.addEventListener('click', ()=>{
  burger.style.display = 'none';
  menu.classList.toggle('menu-active');
  
  if(burger.style.display == 'none'){
    document.body.style.overflow = 'hidden';
    bg.style.display = 'block';
  }else{
    document.body.style.overflow = 'auto';
    bg.style.display = 'none';
  }
});

bg.addEventListener('click', ()=>{
  handleCloseMenu()
});

//fechar ao clicar no bg
const handleCloseMenu = () =>{
  menu.classList.remove('menu-active');
    burger.classList.remove('is-active');
    document.body.style.overflow = 'auto';
    bg.style.display = 'none';
    burger.style.display = 'block';
}


