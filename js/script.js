let lexicsButton = document.querySelector('.lessons');
let lessonsButton = document.querySelector('.lexics');
let textsButton = document.querySelector('.texts');
let menuPoints = document.querySelectorAll('.header__menu-point');
let header = document.querySelector('.header');


menuPoints.forEach((item) => {
    item.addEventListener('mouseover', function () {
        console.log(item.children[1])
        item.children[1].classList.remove('hidden');
    });
    item.addEventListener('mouseout', function () {
        console.log(item.children[1])
        item.children[1].classList.add('hidden');
    });
});

let main = document.querySelector('main');

//hide menu on scroll
let scrollBefore = 0;
let upCounter = 0;
let downCounter = 0;
window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY;

    if (scrollBefore < scrolled) {
        if (scrolled < 100) {
            header.classList.remove('header_hidden');
           return; 
        } 
        console.log('down');
        console.log(scrolled);
        scrollBefore = scrolled;
        if (header.classList.contains('header_hidden')) return;
        header.animate([
            {top: 0},
            {top: '-50px'}
        ], {
            duration: 200
        })
        header.classList.add('header_hidden');

    }else{
        console.log('up');
        scrollBefore = scrolled;
        if (!header.classList.contains('header_hidden')) return;
        header.animate([
            {top: '-50px'},
            {top: 0}
        ], {
            duration: 200
        })
            header.classList.remove('header_hidden');

    }
})