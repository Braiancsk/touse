let user1 = document.getElementById('user1');
let user2 = document.getElementById('user2');
let user3 = document.getElementById('user3');
let slide = document.querySelectorAll('.slide');
user1.addEventListener('click', ()=>{
    user1.classList.add('circle');
    user2.classList.remove('circle');
    user3.classList.remove('circle');
});

user2.addEventListener('click', ()=>{
    user2.classList.add('circle');
    user3.classList.remove('circle');
    user1.classList.remove('circle');
});

user3.addEventListener('click', ()=>{
    user3.classList.add('circle');
    user2.classList.remove('circle');
    user1.classList.remove('circle');
});

function handleSlide(){
    let slides = [slide.length];
    slideChange = slides.map((event)=>{
        console.log(event.slideChange);
    });
}

handleSlide();