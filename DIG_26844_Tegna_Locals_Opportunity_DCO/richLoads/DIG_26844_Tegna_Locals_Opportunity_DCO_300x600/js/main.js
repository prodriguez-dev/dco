// // Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
	.from("#bg", 0.5, { x: -16, ease: Power3.easeOut }, "logo")
	.from("#logo", 0.5, { x: -120, ease: Power3.easeOut }, "logo")
	.from("#car-icon", 0.75, { x: -132, ease: Back.easeOut.config(1), delay: -.1 }, "car")
	.from("#header", 0.5, { opacity: 0, y: 3, ease:Power3.easeOut }, "car+=0.25")
	.from("#calc-wrapper", 0.5, { opacity: 0, y: 3, ease:Power3.easeOut }, "car+=0.35")
	.from("#restrictions", 0.5, { opacity: 0, y: 3 }, "car+=0.5")
    .to("#header", 1.5, {  })
    .to("#header", 0.25, { opacity: 0, y: 3})
    .from("#header-2", 0.5, { opacity: 0, y: 3, ease: Power3.easeOut })
