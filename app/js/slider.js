var next = document.querySelector('.slider__arrow--next');
var prev = document.querySelector('.slider__arrow--prev');



$('.slider__list').slick(
    {   autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: prev,
        nextArrow: next,
        dots: true,
    }  
    
    
);