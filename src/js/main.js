let menu = document.getElementById('header__menu-burger');
let showMenu = document.getElementById('mobile-menu');
menu.addEventListener('click', openMenu);

function openMenu() {
    let span1 = document.getElementById('line-1');
    let span2 = document.getElementById('line-2');
    let span3= document.getElementById('line-3');
    showMenu.classList.toggle('mobile-menu_show');
    span1.classList.toggle('line-1');
    span2.classList.toggle('line-2-hidden');
    span3.classList.toggle('line-3');
}
