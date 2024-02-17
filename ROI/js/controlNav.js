let anchoViwport = document.querySelector(`body`);

anchoViwport = anchoViwport.clientWidth;

if (anchoViwport >= 768) {
    const xNav = document.querySelector(`.nav__x`);

    xNav.remove();


}