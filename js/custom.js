let nav_a = document.querySelectorAll("nav ul li a");
let nav_links = document.querySelectorAll("nav ul li");
let nav_container = document.querySelector(".nav-container");
let nav_toggle = document.querySelector("#navToggle");
let header = document.querySelector(".header");

// //?#####NOTE:adding  active class in nav links at main navbar####
// //? #######################

nav_a.forEach((link) => {
	link.addEventListener("click", function () {
		nav_a.forEach((link_remove) => {
			link_remove.classList.remove("active");
		});
		link.classList.add("active");
	});
});
nav_links.forEach((element) => {
	element.addEventListener("click", function () {
		nav_container.classList.add("active");
	});
});

// //?#####NOTE:toggle active in nav-container for bring mobile menu####
// //? #######################

// nav_toggle.addEventListener("click", function () {
// 	nav_container.classList.toggle("active");
// });
// //?#######NOTE:sticky menu
// //? #######################
// let topOfNav = nav_container.offsetTop;

// console.log(topOfNav);
// function fixedNav() {
// 	// console.log(navHeight);

// 	if (window.scrollY > topOfNav) {

// 		header.classList.add("headerBackground");
// 	} else {

// 		header.classList.remove("headerBackground");
// 	}
// }
// window.addEventListener("scroll", fixedNav);

