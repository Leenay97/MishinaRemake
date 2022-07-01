let lexicsButton = document.querySelector('.lessons');
let lessonsButton = document.querySelector('.lexics');
let textsButton = document.querySelector('.texts');
let menuPoints = document.querySelectorAll('.header__menu-point');
let header = document.querySelector('.header');
let search = document.querySelector('.search__text');


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

//search menu
search.addEventListener('keypress', (e) => {
    let key = window.event.keyCode;

    if (key === 13) {
        console.log('dsas')
        if (search.value == 1){
            window.open(`https://leenay97.github.io/MishinaRemake/lesson1.html#${search.value}`, '_self');
            let searchDestination = document.getElementById(`${search.value}`);
            searchDestination.scrollIntoView();
            search.value = '';
        }
    //     return false;
    // } else {
    //     return true;
    }
})


//menu button

let menuButton = document.querySelector('.menu__button');
let upStr = document.querySelector('.burger__up');
let downStr = document.querySelector('.burger__down');
let midStr = document.querySelector('.burger__mid');

menuButton.addEventListener('click', (e)=>{
    midStr.classList.toggle('burger__hidden');
    upStr.classList.toggle('burger__up_rotated');
    downStr.classList.toggle('burger__down_rotated');
})