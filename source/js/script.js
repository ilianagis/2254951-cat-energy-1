const toggleButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

const sliderButton = document.querySelector('.slider__toggle');
const slider = document.querySelector('.slider');


mainNav.classList.add('main-nav--js');
mainNav.classList.add('main-nav--closed');

toggleButton.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--closed');
});

if (sliderButton) {
    let firstIndicator = false;
    sliderButton.addEventListener('click', () => {
        if (firstIndicator) {
            slider.classList.toggle('slider--before');
            slider.classList.toggle('slider--after');
        }else {
            slider.classList.add('slider--before');
            firstIndicator = true;
        }

    })
}
