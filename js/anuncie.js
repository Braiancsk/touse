let user1 = document.getElementById('user1');
let user2 = document.getElementById('user2');
let user3 = document.getElementById('user3');
let slide = document.querySelectorAll('.slide-single');

user1.addEventListener('click', ()=>{
    user1.classList.add('circle');
    user2.classList.remove('circle');
    user3.classList.remove('circle');
    handleSlide(); 
});



user2.addEventListener('click', ()=>{
    user2.classList.add('circle');
    user3.classList.remove('circle');
    user1.classList.remove('circle');
    handleSlide();
});

user3.addEventListener('click', ()=>{
    user3.classList.add('circle');
    user2.classList.remove('circle');
    user1.classList.remove('circle');
    handleSlide();
});

function handleSlide(val){
    let firstSlide = slide[0];
    let secondSlide = slide[1];
    let thirdSlide = slide[2];
    for(var i = 0; i < slide.length; i++);

    let user = [
        user1,
        user2,
        user3
    ]
    
    if(user[0].classList.contains('circle')){
        firstSlide.classList.add('active-slide');
        secondSlide.classList.remove('active-slide');
        thirdSlide.classList.remove('active-slide');
    
    }else if(user[1].classList.contains('circle')){
        secondSlide.classList.add('active-slide');
        firstSlide.classList.remove('active-slide');
        thirdSlide.classList.remove('active-slide');
 
    }else if(user[2].classList.contains('circle')){
        thirdSlide.classList.add('active-slide');
        firstSlide.classList.remove('active-slide');
        secondSlide.classList.remove('active-slide');

    }
}

//autoplay no slide
/*
function autoPlay(){
    let firstSlide = slide[0];
    let secondSlide = slide[1];
    let thirdSlide = slide[2];
    for(var i = 0; i < slide.length; i++);


    firstSlide.classList.add('active-slide');
    secondSlide.classList.remove('active-slide');
    thirdSlide.classList.remove('active-slide');
    user1.classList.add('circle');
    user2.classList.remove('circle');
    user3.classList.remove('circle');
   
}




function autoPlay2(){
    let firstSlide = slide[0];
    let secondSlide = slide[1];
    let thirdSlide = slide[2];
    for(var i = 0; i < slide.length; i++);

    secondSlide.classList.add('active-slide');
    firstSlide.classList.remove('active-slide');
    thirdSlide.classList.remove('active-slide');
    user2.classList.add('circle');
    user1.classList.remove('circle');
    user3.classList.remove('circle');
   
}

function autoPlay3(){
    let firstSlide = slide[0];
    let secondSlide = slide[1];
    let thirdSlide = slide[2];
    for(var i = 0; i < slide.length; i++);

    thirdSlide.classList.add('active-slide');
    firstSlide.classList.remove('active-slide');
    secondSlide.classList.remove('active-slide');
    user3.classList.add('circle');
    user1.classList.remove('circle');
    user2.classList.remove('circle');
}


const delay = setInterval(autoPlay, 9000);
const delay2 = setInterval(autoPlay2, 3000);
const delay3 = setInterval(autoPlay3, 6000);

const clear = setInterval(clearDelay,9000);
//const play = setInterval(playDelay,9000);
function clearDelay(){
    clearInterval(delay3);
    clearInterval(delay2);
    clearInterval(delay);
}

function playDelay(){
const delay2 = setInterval(autoPlay2, 3000);
const delay3 = setInterval(autoPlay3, 5000);
const delay = setInterval(autoPlay, 7000);
}
handleSlide();
*/



