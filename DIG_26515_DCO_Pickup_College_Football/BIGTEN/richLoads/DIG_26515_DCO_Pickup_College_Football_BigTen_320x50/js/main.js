// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#logo", 0.5, { x: -85, ease: Power3.easeOut }, "logo")
	.from("#hopper", 0.5, { x: 233, ease: Back.easeOut.config(.6) }, "header")
	.from("#tv", 0.5, { x: 200, ease: Back.easeOut.config(.6) }, "header+=0.1")
	.from("#header-1", 1.5, {}) // Delay
	.to("#hopper", 0.5, { x: 233, ease: Back.easeIn.config(1) }, "out")
	.to("#tv", 0.5, { x: 200, ease: Back.easeIn.config(1) }, "out+=0.1")

	.from("#header-1", 0.1, {}) // Delay

	.from("#header-1", 0.5, { opacity: 0, })
	.from("#header-1", 2, {}) // Delay
	.to("#header-1", 0.5, { opacity: 0, })

	.from("#header-2", 0.5, { opacity: 0, })
	.from("#cta-wrapper", 0.5, { opacity: 0, });
