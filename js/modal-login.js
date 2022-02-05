let modal__bg = document.querySelector('[data-bg]')
let modal = document.querySelector('[data-modal]')
let modal__login = document.querySelector('[data-modal-login]')
let btn__cadastrar = document.querySelectorAll('[data-cadastrar]')
let btn__login = document.querySelectorAll('[data-login]')
let close = document.querySelectorAll('[data-close-modal]')


//input de senha
let senha = document.querySelector('[data-senha]')
let repetir = document.querySelector('[data-repetir]')

//aviso
let aviso = document.querySelectorAll('[data-aviso]')


repetir.addEventListener('input',()=>{
    handleValidityPassword()
})

const handleValidityPassword = () =>{
    if(senha.value === repetir.value){
        aviso.forEach(alert =>{
            alert.innerText = 'As senhas são iguais'
            alert.classList.add('success')
        })
    }else{
        aviso.forEach(alert =>{
            alert.innerText = 'Suas senhas não batem'
            alert.classList.add('warning')
        })
    }
}


//abrir modal de cadastro
btn__cadastrar.forEach(btn =>{
    btn.addEventListener('click',()=>{
        modal__bg.classList.add('bg__active')
        modal.classList.add('cadastrar__active')
        modal__login.classList.remove('cadastrar__active')
        document.body.style.overflow = 'hidden'
    })
})

//abrir modal login
btn__login.forEach(button =>{
    button.addEventListener('click',()=>{
        modal__bg.classList.add('bg__active')
        modal__login.classList.add('cadastrar__active')
        modal.classList.remove('cadastrar__active')
        document.body.style.overflow = 'hidden'
    })
})


//fechar modal
close.forEach(button =>{
    button.addEventListener('click',()=>{
        handleCloseModal()
    })
})



//fechar modal
modal__bg.addEventListener('click',()=>{
    handleCloseModal()
})


const handleCloseModal = () =>{
    modal__bg.classList.remove('bg__active')
    modal.classList.remove('cadastrar__active')
    modal__login.classList.remove('cadastrar__active')
    document.body.style.overflow = 'auto'
}