//Swiper
const mySwiper = new Swiper('.commercial-lighting-swiper', {
    slidesPerView: 3,
    spaceBetween: 46,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const industrialLightingImage = document.getElementsByClassName('industrial-lighting-image');
for (let i = 0; i < industrialLightingImage.length; i++) {
    industrialLightingImage[i].addEventListener("click", function () {
        this.classList.toggle('active')
    });
}
