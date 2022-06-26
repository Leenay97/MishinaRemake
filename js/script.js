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
let lastScroll = 0;
const defaultOffset = 200;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_hidden')

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header_hidden')
        console.log('down')
    } else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('header_hidden')
    }

    lastScroll = scrollPosition();
})
