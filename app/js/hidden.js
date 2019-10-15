var openInfoBtn = document.querySelector('.about-info__btn');
var infoBlock = document.querySelectorAll('.about-info__paragraph--hidden');
var openReasonsBtn = document.querySelector('.reasons-block__btn');
var reasonBlock = document.querySelectorAll('.reasons__item--hidden');

openInfoBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (var i = 0; i < infoBlock.length; i++) {
        infoBlock[i].classList.remove('mob-hidden')
    }
    openInfoBtn.classList.add('mob-hidden__btn');
})

openReasonsBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    for (var i = 0; i < reasonBlock.length; i++) {
        reasonBlock[i].classList.remove('mob-hidden')
    }
    openReasonsBtn.classList.add('mob-hidden__btn');
})