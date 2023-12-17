const hamMenu = document.querySelector(".ham-menu");
const showMore = document.querySelector(".show-more");
const cross = document.querySelector(".close-more");
const navHidde = document.querySelector(".nav-show");

hamMenu.addEventListener("click", onHidde);
function onHidde() {
	showMore.style.display = "grid";
	navHidde.style.display = "none";
}

cross.addEventListener("click", hide);
function hide() {
	showMore.style.display = "none";
	navHidde.style.display = "grid";
}

