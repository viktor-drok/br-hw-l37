const swiperHero = new Swiper(".heroSwiper", {
    loop: true,
    pagination: {
        el: ".heroSwiper .swiper-pagination",
        clickable: true,
    },
});

const swiperArrivals = new Swiper(".guitars", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".svg-next",
        prevEl: ".svg-prev",
    },
});

const swiperPartners = new Swiper(".partners", {
    slidesPerView: 9,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".partners-svg-next",
        prevEl: ".partners-svg-prev",
    },
});