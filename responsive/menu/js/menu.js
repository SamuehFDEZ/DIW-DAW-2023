let enlaceMenu;

function despliegaMenu() {
  document.querySelector("nav>ul").classList.toggle("desplegado");
}
function iniciarMenu() {
    enlaceMenu = document.querySelector("nav>a");
    enlaceMenu.addEventListener("click", despliegaMenu, false);
}

window.addEventListener("load", iniciarMenu, false);