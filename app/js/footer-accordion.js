var accordionBtn = document.querySelectorAll('.footer-menu__top');

for (var i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        if (!(this.classList.contains('active-accordion'))) {
            for (var i = 0; i < accordionBtn.length; i++) {
                accordionBtn[i].classList.remove('active-accordion');
            }
            this.classList.add('active-accordion');
        } else {
            this.classList.remove('active-accordion');
        }
    })
}