// Ease Variables
let backOut = Back.easeInOut.config(1);
let backOutMore = Back.easeOut.config(2.5);
let power = Power3.out;

// Calc Logo Y Animation Distance
let distance;
(function calcLogoMovement() {
	let logo = document.getElementById('logo');
	distance = logo.offsetHeight + logo.offsetTop;
	console.log(distance);
})();

let container = document.getElementById('container');
let restrictions = document.getElementById('restrictions');
container.addEventListener("mouseenter", function () {
	restrictions.innerHTML = "Aplican restricciones. Google es una marca registrada de Google LLC.";
	// restrictions.style.left = "100px";
});
container.addEventListener("mouseout", function () {
	restrictions.innerHTML = "Aplican restricciones.";
});

// Timeline
const tl = new TimelineMax({ delay: 0.75 });
tl.from('#bg', 0.8, { x: 205 }, "logo")
	.from("#logo", 0.5, { y: -distance }, "logo+=0.3")
	.from('#header', 1, { opacity: 0 }, "header")
	.from("#remote", 0.85, { y: 45, ease: backOut }, "header+=0.2")
	.from('#header', 1.5, {})
	.to('#header', .65, { opacity: 0 }, "fade1")
	.to("#remote", 0.85, { y: 45, ease: backOut }, "fade1")
	.to('#bg', 0.5, { x: 88 }, "fade1+=.3")

	.from('#header-2', 1, { opacity: 0 })
	.from("#red-underline-1", 0.5, { width: 0 })
	.from('#header-2', 2, {})
	.to('#header-2, #red-underline-1', .65, { opacity: 0 })

	.from('#rule', 0.5, { height: 0 }, "here")
	.from("#google-logo", 0.5, { opacity: 0 }, "logoenter")
	.from('#header-3', 1, { opacity: 0 }, "logoenter")
	.to('#bg', 0.5, { x: 0 }, "logoenter-=0.5")
	.to("#remote", 0.85, { y: 0, ease: backOut }, "logoenter+=0.2")
	.from('#header', 2, {})
	.to('#header-3, #rule, #google-logo', .65, { opacity: 0 }, "fade2")
	.to("#remote", 0.85, { y: 45, ease: backOut }, "fade2")
	.to('#bg', 0.5, { x: 88 }, "fade2+=.3")

	.from('#header-4', 1, { opacity: 0 }, "head")
	.from('#cta-wrapper, #restrictions', 0.5, { opacity: 0, ease: power }, "head+=0.5");


	// .from('#cta-wrapper', 0.5, { opacity: 0, ease: power }, "header+=0.5")
	// .from("#remote", 0.85, { y: 87, ease: backOut }, "header")
	// .from('#header', 1.5, {})
	// .to('#header', 1, { opacity: 0 })
	// .to("#remote", 0.85, { y: 87, ease: backOut }, "-=1");