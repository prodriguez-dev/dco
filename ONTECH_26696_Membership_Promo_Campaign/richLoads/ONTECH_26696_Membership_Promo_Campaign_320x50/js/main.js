
// Timeline
const tl = new TimelineMax({ delay: 0.5 });
let PowerEase = Power1.easeOut;

tl.from("#container", .5, { opacity: 0 })
	.from("#beacon", .5, { scale: 17.0, left: 400, top: 150, ease: Power1.easeOut }, "beacon")
	.from("#logo", .5, { opacity: 0, ease: PowerEase }, "beacon+=0.35")
	.from("#google-logo, #rule", .5, { opacity: 0 }, "beacon+=0.65")
	.from("#product", .5, { y: 118, ease: Power3.easeOut }, "beacon+=0.65")
	.from("#cta-wrapper, #arrow, #restrictions, #save-text", .5, { opacity: 0 }, "beacon+=1")
	.from("#header", 1.5, {}) // Delay
	.to("#product", .5, { y: -118, ease: Power3.easeIn }, "product-out")
	.from("#exclusive-text", .5, { opacity: 0 }, "headerIn")
	.from("#header", .5, { opacity: 0 }, "headerIn+=0.1")
	.from("#header", 1.5, {}) // Delay
	.to("#header", .5, { opacity: 0 })
	.from("#subhead", .5, { opacity: 0 });
