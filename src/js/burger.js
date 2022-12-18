const burger_icon = document.querySelector('.burger__icon');
const burger_items = document.querySelectorAll('.header__menu__item')
;
burger_icon.addEventListener('click', () => {
    burger_icon.classList
        .toggle('activeBurger');
    document.querySelector('.header__menu')
        .classList.toggle('activeBurger');
    document.body.classList.toggle('blockScroll');
})
burger_items.forEach((item) => {
    item.addEventListener('click', () => {
        burger_icon.classList
            .remove('activeBurger');
        document.querySelector('.header__menu')
            .classList.remove('activeBurger');
        document.body.classList.remove('blockScroll');
    })
})