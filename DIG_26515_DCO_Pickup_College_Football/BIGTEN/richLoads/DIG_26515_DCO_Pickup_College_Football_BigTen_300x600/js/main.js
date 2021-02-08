// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#logo", 0.5, { x: -100, ease: Power3.easeOut }, "logo")
	.from("#header", 0.5, { opacity: 0, }, "header")
	.from("#hopper", 0.5, { x: 285, ease: Back.easeOut.config(1) }, "header+=0.1")
	.from("#tv", 0.5, { x: 245, ease: Back.easeOut.config(1) }, "header+=0.2")
	.from("#subhead", 0.5, { opacity: 0, }, "header+=0.75")
	.from("#cta-wrapper", 0.5, { opacity: 0, })
	.from("#header", 1, {}) // Delay
	.from('#tv-overlay', 0.5, { opacity: 0 }, "overlay")
	.from('#pac12-logo', 0.75, { opacity: 0, y: 3 }, "overlay+=0.2");