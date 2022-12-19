const menu = document.querySelector(".menu");
const sidemenu = document.querySelector(".sidemenu");
const menuOpen = () => {
	menu.classList.toggle("menu--opened");
	sidemenu.classList.toggle("side--opened");
};
menu.addEventListener("click", menuOpen);
