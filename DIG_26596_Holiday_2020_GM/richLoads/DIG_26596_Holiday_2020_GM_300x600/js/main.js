// Ease Variables
let backOut = Back.easeOut.config(1.5);
let power = Power3.out;
let powerIn = Power3.In;
// Calc Logo Y Animation Distance
let distance;
(function calcLogoMovement() {
	let logo = document.getElementById('logo');
	distance = logo.offsetHeight + logo.offsetTop + 3;
	console.log(distance);
})();

// Timeline
const tl = new TimelineMax({});
tl.from("#flag-video", 0.5, { opacity: 0 })
	.from('#header-1', 1, {}) // delay
	.to("#video-overlay", 0.5, { opacity: 1 }, "overlay")
	.from("#logo", 0.5, { y: -distance, ease: Power3.easeOut }, "overlay")


	.from("#header-1", 0.65, { opacity: 0, y: 3, ease: Back.easeOut.config(2) }, "header-1-in")
	.from('#cta-wrapper', 0.65, { opacity: 0, y: 3, ease: Back.easeOut.config(2) }, "header-1-in+=0.1")
	.set("#bg", { opacity: 1 })
	.from('#header-1', 2, {}) // delay
	.to("#header-1", 0.5, { opacity: 0, y: 3 }, 'header-out')
	.to("#video-overlay", 0.5, { opacity: 0 }, 'header-out')
	.to("#flag-video", 0.5, { opacity: 0 }, 'header-out')

	.from("#header-2", 0.65, { opacity: 0, y: 3, ease: Back.easeOut.config(2) }, "header-2-in")
	.from('#gift-wrapper', 0.5, { x: 250, rotation: 15, ease: Back.easeOut.config(0.65), transformOrigin: "50% 50%" }, "header-2-in");


