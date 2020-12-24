'use strict'

// Make navbar transparent before it is scrolling to read
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    // navbar height checking to see the gradient
    //console.log(`navbarHeight: ${navbarHeight}`);
    // gradient effect
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navber menu(메뉴 클릭)
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu = addEventListener('click', (event) => {
    scrollIntoView(link);
    
});

//Handle scrolling when tapping 'Contact me' button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn = addEventListener('click', (event) => {
    /*
    const target = event.target; // target은 event가 실행이 되었을 때, 우리가 click한 element를 출력
    const link = target.dataset.link; //dataset에 우리가 정의한 변수들이 전부 할당, dataset안에 우리가 data-link라고 했으니까 link찍기
    if(link == null) {
        return;
    }
    */
    scrollIntoView('#contact');
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}



//Make menuBar when screen is going to small
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
