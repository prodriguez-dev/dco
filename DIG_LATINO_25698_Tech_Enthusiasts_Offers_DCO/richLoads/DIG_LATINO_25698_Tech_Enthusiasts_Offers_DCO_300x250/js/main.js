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
});
container.addEventListener("mouseout", function () {
    restrictions.innerHTML = "Aplican restricciones.";
});

// Timeline
const tl = new TimelineMax({ delay: 0.75 });
tl.from("#logo", 0.5, { y: -distance }, "logo")
    .from('#bg', 0.5, { x: 50 }, "logo")
    .from('#header', 1, { opacity: 0 }, "header")
    .from("#remote", 0.85, { y: 85, ease: backOut }, "header")
    .from('#cta-wrapper, #restrictions', 0.5, { opacity: 0, ease: power }, "header")
    .from('#subheader', 1, { opacity: 0 }, "-=0.5")
    .from('#body', 1, { opacity: 0 }, "-=0.65")
    .staggerFrom('.logo', 0.5, { opacity: 0, y: 5, ease: power }, 0.075, "-=1")

    .from('#body', 1.5, {}) // DELAY

    .to("#header, #subheader, #body", 0.5, { opacity: 0 }, "fadeout")
    .staggerTo('.logo', 0.5, { opacity: 0, y: 5, ease: power }, -0.075, "fadeout-=0.5")
    .from('#header-2', 1, { opacity: 0 }, "header-2")
    .to("#remote", 0.75, { y: -160, ease: backOut }, "header-2")
    .to('#bg', 0.5, { x: -50, ease: power }, "header-2")
    .from("#red-underline-1", 0.35, { width: 0 }, "-=0.5")
    .from("#red-underline-2", 0.5, { width: 0, ease: power }, "-=0.1")
    .from('#google-logo', 1, { opacity: 0 }, "-=0.5")
    .from('#pop-text-wrapper', 0.5, { scale: 0, ease: backOutMore }, "-=0.5");
