const swiperSliderHorizon = (selectorSlider, selectorBtnNext, selectorBtnPrev) => {
    new Swiper(selectorSlider, {
        navigation: {
            nextEl: selectorBtnNext,
            prevEl: selectorBtnPrev,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
                return `0<span class="${currentClass}"></span>/0<span class="${totalClass}"></span>`;
            }
        },
        spaceBetween: 10,
        loop: true,
    });
}

export default swiperSliderHorizon;