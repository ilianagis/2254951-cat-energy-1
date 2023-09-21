const toggleButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.add('main-nav--js');
mainNav.classList.add('main-nav--closed');

toggleButton.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--closed');
});