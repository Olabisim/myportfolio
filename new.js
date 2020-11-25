//FOR THE CIRCLE TOP
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click',function(){
    nextSlide();
});
prevBtn.addEventListener('click',function(){
    prevSlide();
});

let slideNo = 0;

const nextSlide = ()=>{
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByClassName('slide');
    const currentSlide = document.querySelector('.slide.active');
    
    currentSlide.classList.remove('active');
    slideNo = (slideNo + 1) % slides.length;
    slider.style.marginLeft = '-'+slideNo+'00%';
    slides[slideNo].classList.add('active');
};


const prevSlide = ()=>{
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByClassName('slide');
    const currentSlide = document.querySelector('.slide.active');
    
    currentSlide.classList.remove('active');
    slideNo = (slideNo - 1 + slides.length) % slides.length;
    slider.style.marginLeft = '-'+slideNo+'00%';
    slides[slideNo].classList.add('active');
};


function resetTimer(){


    clearInterval(timer);
    
    timer = setInterval( autoPlay, 4000);
}


function autoPlay(){
    nextSlide();
}

let timer = setInterval( autoPlay, 4000);











//FOR THE SECTION 2
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');

nextBtn.addEventListener('click',function(){
    nextSlidee();
});
prevBtn.addEventListener('click',function(){
    prevSlidee();
});

let slideNo1 = 0;

const nextSlidee = ()=>{
    const slider1 = document.querySelector('.slider1');
    const slides1 = slider1.getElementsByClassName('slide1');
    const currentSlide1 = document.querySelector('.slide1.active1');
    
    currentSlide1.classList.remove('active1');
    slideNo1 = (slideNo1 + 1) % slides1.length;
    slider1.style.marginLeft = '-'+slideNo1+'00%';
    slides1[slideNo1].classList.add('active1');
};


const prevSlidee = ()=>{
    const slider1 = document.querySelector('.slider1');
    const slides1 = slider1.getElementsByClassName('slide1');
    const currentSlide1 = document.querySelector('.slide1.active1');
    
    currentSlide1.classList.remove('active1');
    slideNo1 = (slideNo1 - 1 + slides1.length) % slides1.length;
    slider1.style.marginLeft = '-'+slideNo1+'00%';
    slides1[slideNo1].classList.add('active1');
};


function resetTimerr(){


    clearInterval(timerr);
    
    timerr = setInterval( autoPlay1, 6000);
}


function autoPlay1(){
    nextSlidee();
}

let timerr = setInterval( autoPlay1, 6000);











