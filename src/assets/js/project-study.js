//Swiper
const swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            spaceBetween: 0,
            slidesPerView: 2,
        },
        991: {
            spaceBetween: 0,
            slidesPerView: 2,
        }
    }
});