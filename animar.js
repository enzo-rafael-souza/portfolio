
const menuNav = document.getElementById('menu__mobile')
const btnAnimar = document.getElementById('btn__menu')

menuNav.addEventListener('click', animarMenu)

function animarMenu() {
    menuNav.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')

}