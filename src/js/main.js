import swiperSliderVertical from '../js/modules/swiper-vertical';
import swiperSliderHorizon from '../js/modules/swiper-horizon';
import forms from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
    swiperSliderVertical('.swiper-verical', '.swiper-vertical-button-next');
    swiperSliderHorizon('.swiper-horizon', '.swiper-horizon-button-next', '.swiper-horizon-button-prev')
    forms();
});