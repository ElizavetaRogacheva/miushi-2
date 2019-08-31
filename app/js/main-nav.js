var burgerBtn = document.querySelector('.main-menu__btn');
var menuBlock = document.querySelector('.main-header__menu-adaptive');
var closeMenuBtn = document.querySelector('.menu-adaptive__btn-close');

burgerBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBlock.classList.remove('hidden');
})

closeMenuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    menuBlock.classList.add('hidden');
})