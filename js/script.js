let lexicsButton = document.querySelector('.lessons');
let lessonsButton = document.querySelector('.lexics');
let textsButton = document.querySelector('.texts');
let menuPoints = document.querySelectorAll('.header__menu-point');

menuPoints.forEach((item)=>{
    item.addEventListener('mouseover', function(){
        console.log(item.children[1])
        item.children[1].classList.remove('hidden');
    });
    item.addEventListener('mouseout', function(){
        console.log(item.children[1])
        item.children[1].classList.add('hidden');
    });
});