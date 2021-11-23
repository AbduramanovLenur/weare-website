const swiperSliderVertical = (selectorSlider, selectorBtnNext) => {
    new Swiper(selectorSlider, {
        navigation: {
            nextEl: selectorBtnNext,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        direction: "vertical",
        spaceBetween: 10,
        mousewheel: {
            sensitivity: 1,
        },
        loop: true,
    })
};

export default swiperSliderVertical;