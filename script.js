let menuIcon = document.getElementById('menu');
let darkModeIcon = document.getElementById('colorMode');
let navScroll = document.querySelector('.scroll__nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('bx-menu');
    document.querySelector('.nav__off__canvas').classList.toggle('show__nav');
});

darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-moon');
    darkModeIcon.classList.toggle('bx-sun');
    document.getElementById('main').classList.toggle('dark__mode');
});

// Scroll Animation

navScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
   });
});

// Initialize Scroll Reveal 
function initializeScrollReveal(origin){
    return ScrollReveal({
        origin: origin,
        distance: '1.5rem',
        duration: 2000,
        reset: 'true',
    })
};

// Footer

// Top
const srTop = initializeScrollReveal('top');
srTop.reveal('.section__body__text', {delay: 100});
srTop.reveal('.section__body__image', {delay: 100});
srTop.reveal('.section__client__text', {delay: 100});
srTop.reveal('.section__client__header', {delay: 100});
srTop.reveal('.section__client__icons', {delay: 100});

// Left
const srLeft = initializeScrollReveal('left');
srLeft.reveal('.list1', {delay: 300});
srLeft.reveal('.footer__image', {delay: 100});

// Right
const srRight = initializeScrollReveal('right');
srRight.reveal('.list3', {delay: 300});
srRight.reveal('.footer__description', {delay: 100});

//Bottom
const srBottom= initializeScrollReveal('bottom');
srBottom.reveal('.list2', {delay: 300}); 