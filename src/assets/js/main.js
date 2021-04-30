//Swiper
const swiper = new Swiper('.electrical-swiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

menuItemServices.addEventListener("click", function () {
    dropDownList.style.display = 'flex';
});
