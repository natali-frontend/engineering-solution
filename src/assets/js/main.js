const menuItemServices = document.getElementsByClassName('menu-item-services');
const dropDownList = document.getElementsByClassName('drop-down-list');

menuItemServices.addEventListener("click", function () {
    dropDownList.style.display = 'flex';
});
