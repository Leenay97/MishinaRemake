let lexicsButton = document.querySelector('.lessons');
let lessonsButton = document.querySelector('.lexics');
let textsButton = document.querySelector('.texts');
let menuPoints = document.querySelectorAll('.header__menu-point');
let menuList = document.querySelector('.header__menu-list')
let header = document.querySelector('.header');
let search = document.querySelector('.search__text');
search.enterKeyHint = 'search'
let prevSubmenu;

if (window.innerWidth <= 750) {
    menuList.classList.add('hidden');
    console.log('done')
}

menuPoints.forEach((item) => {
    item.addEventListener('mouseover', function () {
        if (window.innerWidth <= 750) return;
        console.log(item.children[1])
        item.children[1].classList.add('submenu__shown');
    });
    item.addEventListener('mouseout', function () {
        if (window.innerWidth <= 750) return;
        console.log(item.children[1])
        item.children[1].classList.remove('submenu__shown');
    });
    //onclick
    item.addEventListener('click', function (e) {
        if (window.innerWidth > 750) return;
        menuPoints.forEach((i)=>{
            if (i == item) return;
            i.children[1].classList.remove('submenu__shown');
        })
        item.children[1].classList.toggle('submenu__shown');
        prevSubmenu = item;
        // }
    });
});

let main = document.querySelector('main');

//hide header on scroll
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
    // midStr.classList.toggle('burger__hidden');
    // upStr.classList.toggle('burger__up_rotated');
    // downStr.classList.toggle('burger__down_rotated');
    menuButton.classList.toggle('burger-alt');
    menuList.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    
})