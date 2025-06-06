const openMenu = document.getElementById("open-menu");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
	menu.classList.add("active");
	openMenu.classList.add("fechado");
});

closeMenu.addEventListener("click", () => {
	menu.classList.remove("active");
	openMenu.classList.remove("fechado");
});
