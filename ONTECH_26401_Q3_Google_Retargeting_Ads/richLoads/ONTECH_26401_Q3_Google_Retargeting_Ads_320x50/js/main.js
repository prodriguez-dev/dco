const tl = new TimelineMax({});

let PowerEase = Power1.easeOut;

tl.from("#background", .5, { css: { opacity: 0 }, ease: PowerEase }, "=+0.5")
	.from("#beacon", .5, { scale: 22.0, left: 500, ease: Power1.easeOut })
	.from("#logo", .5, { css: { opacity: 0 }, ease: PowerEase }, "-=0.15")
	.from("#google-logo, #divider", .5, { css: { opacity: 0 }, ease: PowerEase }, "-=0.15")
	.from("#product", .75, { y: 50, ease: Power4.easeOut }, "-=0.25")
	.to("#background", 1.5, {}) // Delay
	.to("#background", .5, { css: { opacity: 0 }, ease: PowerEase }, "out")
	.to("#product", .75, { y: 50, ease: Power4.easeIn }, "out")


	.from("#headline", .5, { css: { opacity: 0 }, ease: PowerEase })
	.to("#background", 1.5, {}) // Delay
	.to("#headline", .5, { css: { opacity: 0 }, ease: PowerEase })

	.from("#subhead", .5, { css: { opacity: 0 }, ease: PowerEase })
	.from("#cta-wrapper", .5, { css: { opacity: 0 }, ease: PowerEase }, "-=0.15")
	.from("#restrictions", .75, { css: { opacity: 0 }, ease: Power1.easeOu }, "-=0.25");


	// tl.seek("end");