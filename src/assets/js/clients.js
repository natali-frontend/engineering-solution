//Swiper
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