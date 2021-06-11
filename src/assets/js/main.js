const burger = document.getElementsByClassName("burger")[0];
const menu = document.getElementsByClassName("header-menu")[0];

// Burger menu
burger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("mobile-menu")
});

// Outside click
window.addEventListener('click', function (e) {
    if (!document.getElementsByClassName('menu-list')[0].contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove("active");
        menu.classList.remove("mobile-menu");
    }
});