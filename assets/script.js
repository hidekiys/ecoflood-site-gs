const openMenu = document.getElementById("open-menu");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
const btnVerMais = document.getElementById("btn-ver-mais");
const dropdown = document.getElementById("dropdown");
const closeDropDown = document.getElementById("close-dropdown");
openMenu.addEventListener("click", () => {
	menu.classList.add("active");
	openMenu.classList.add("fechado");
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
	openMenu.classList.remove("fechado");
});

btnVerMais.addEventListener("click", () => {
	dropdown.classList.add("dropdown-active");
});
closeDropDown.addEventListener("click", () => {
	dropdown.classList.remove("dropdown-active");
});
