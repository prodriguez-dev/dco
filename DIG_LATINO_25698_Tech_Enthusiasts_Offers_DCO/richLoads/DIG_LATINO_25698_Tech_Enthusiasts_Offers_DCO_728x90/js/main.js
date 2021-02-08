// Ease Variables
let backOut = Back.easeInOut.config(1);
let backOutMore = Back.easeOut.config(2.5);
let power = Power3.out;
let bgease = Power3.easeInOut;

// Calc Logo Y Animation Distance
let distance;
(function calcLogoMovement() {
	let logo = document.getElementById('logo');
	distance = logo.offsetHeight + logo.offsetTop;
	console.log(distance);
})();

// Global Variables
let btn = document.getElementById('cta-button');

// Change hover state color 
function defineHoverStates(selector) {
	if (selector === "first") {
		document.getElementById("container").onmouseover = function () {
			btn.style.backgroundColor = "#B61428";
		};
		document.getElementById("container").onmouseleave = function () {
			btn.style.backgroundColor = "#E41932";
		};
		document.getElementById("container").onmousedown = function () {
			btn.style.backgroundColor = "#880F1E";
		};
	} else if (selector === "second") {
		document.getElementById("container").onmouseover = function () {
			btn.style.backgroundColor = "#E8E8E8";
		};
		document.getElementById("container").onmouseleave = function () {
			btn.style.backgroundColor = "white";
		};
		document.getElementById("container").onmousedown = function () {
			btn.style.backgroundColor = "#C5C5C5";
		};
	}
}

let container = document.getElementById('container');
let restrictions = document.getElementById('restrictions');
container.addEventListener("mouseenter", function () {
	restrictions.innerHTML = "Aplican restricciones. Google es una marca registrada de Google LLC.";
});
container.addEventListener("mouseout", function () {
	restrictions.innerHTML = "Aplican restricciones.";
});


// Timeline
const tl = new TimelineMax({ delay: 0.75 });
tl.call(defineHoverStates, ["first"])
	.from("#logo", 0.5, { y: -distance }, "logo")
	.from('#bg', 0.2, { x: 8 }, "logo+=0.2")
	.from('#header', 1, { opacity: 0 }, "header")
	.from('#cta-wrapper', 0.5, { opacity: 0, ease: power }, "header+=0.5")
	.from("#remote", 0.85, { y: 87, ease: backOut }, "header")
	.from('#header', 1.5, {})
	.to('#header', .65, { opacity: 0 })
	.to("#remote", 0.85, { y: 87, ease: backOut }, "-=1")

	.from('#header-2', 1, { opacity: 0 })
	.from('#body', 1, { opacity: 0 }, "-=0.65")
	.staggerFrom('.logo', 1, { opacity: 0, y: 3, ease: power }, 0.1, "-=1")
	.from('#header-2', 1.5, {})
	.to('#header-2, #body', .65, { opacity: 0 })
	.to('#cta-wrapper', 0.5, { opacity: 0, ease: power }, "-=1")
	.staggerTo('.logo', 0.5, { opacity: 0, y: 3, ease: power }, -0.075, "-=1")

	.from('#header-3', 1, { opacity: 0 })
	.from('#google-logo', 1, { opacity: 0 }, "-=0.5")
	.from("#red-underline-1", 0.5, { width: 0 }, "-=0.5")
	.from('#header-3', 2.1, {})
	.to('#header-3, #red-underline-1, #google-logo', .65, { opacity: 0 })

	.call(defineHoverStates, ["second"])
	.set("#remote", { rotation: -90, width: 78 })
	.set("#cta-button", { backgroundColor: "white" })
	.set("#cta-text", { color: "black" })
	.set("#cta-wrapper", { x: 12 })
	.set("#restrictions", { color: "white" })
	.from('#pop-text', 0.5, { opacity: 0 }, "here")
	.to('#bg', .8, { x: -461, ease: bgease }, "here")
	.to("#remote", 1.2, { y: -83, ease: backOut }, "-=0.6")
	.to('#cta-wrapper', 0.5, { opacity: 1, ease: power }, "-=0.1");

