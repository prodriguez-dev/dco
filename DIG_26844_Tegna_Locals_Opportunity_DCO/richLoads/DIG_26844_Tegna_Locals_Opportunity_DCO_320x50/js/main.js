// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#bg", 0.5, { x: -8, ease: Power3.easeOut }, "logo")
	.from("#logo", 0.5, { x: -60, ease: Power3.easeOut }, "logo")
	.from("#header", 0.5, { opacity: 0, y: 3, ease: Power3.easeOut }, "car")
	.from("#calc-wrapper", 0.5, { opacity: 0, y: 3, ease: Power3.easeOut }, "car+=0.15")
	.from("#restrictions", 0.5, { opacity: 0, y: 3 }, "car+=0.3")
	.to("#header", 1.5, {})
    .to("#header", 0.25, { opacity: 0, y: 3})
    .from("#header-2", 0.5, { opacity: 0, y: 3, ease: Power3.easeOut })
