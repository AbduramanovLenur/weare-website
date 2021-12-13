import swiperSliderVertical from '../js/modules/swiper-vertical';
import swiperSliderHorizon from '../js/modules/swiper-horizon';
import forms from './modules/forms';
import burger from './modules/burger';

document.addEventListener('DOMContentLoaded', () => {
    swiperSliderVertical('.swiper-verical', '.swiper-vertical-button-next');
    swiperSliderHorizon('.swiper-horizon', '.swiper-horizon-button-next', '.swiper-horizon-button-prev')
    forms();

    const burgerToggle = document.querySelector('.burger-btn');
    burgerToggle.addEventListener('click', () => {
        burgerToggle.classList.toggle('active');
    });

    burger('.burger-btn', '.hamburger');
});