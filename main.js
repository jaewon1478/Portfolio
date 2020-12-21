'use strict'

// Make navbar transparent before it is scrolling to read
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    // navbar height checking to see the gradient
    console.log(`navbarHeight: ${navbarHeight}`);
    // gradient effect
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Make menuBar when screen is going to small
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});