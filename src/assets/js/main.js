//Swiper
const swiper = new Swiper('.electrical-swiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const mySwiper = new Swiper('.commercial-lighting-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const Myswiper = new Swiper('.work-swiper', {
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});