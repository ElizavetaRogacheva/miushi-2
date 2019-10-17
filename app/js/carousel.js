$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        dotsEach: true,
        loop: true,
        navText: ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"],
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
  });

  