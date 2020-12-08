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