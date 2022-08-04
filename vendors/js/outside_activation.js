jQuery(document).ready(function ($) {
	event.preventDefault();
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});
});
wow = new WOW({
	boxClass: "wow", // default
	animateClass: "animated", // default
	offset: 0, // default
	mobile: true, // default
	live: true, // default
});
wow.init();
console.log('hi')