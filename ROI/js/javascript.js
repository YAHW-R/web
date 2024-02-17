const menu = document.querySelector(".nav__menu");
const list = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");
const cruz = document.querySelector(".nav__x");

menu.addEventListener("click", function () {
    list.classList.toggle("nav__list--show");
});

cruz.addEventListener("click", function () {
    list.classList.toggle("nav__list--show");
});

links.forEach(function (link) {

    link.addEventListener("click", function () {

        list.classList.remove("nav__list--show");

    })

});

