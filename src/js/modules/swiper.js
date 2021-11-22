const swiperSlider = () => {
    new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        direction: "vertical",
        spaceBetween: 10,
    })
};

export default swiperSlider;