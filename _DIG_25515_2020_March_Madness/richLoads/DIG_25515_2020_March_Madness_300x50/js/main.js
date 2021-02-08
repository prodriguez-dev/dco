// JavaScript Document
var tl = new TimelineMax({});

tl.from("#background, #tv-wrapper", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut }, "+=0.5")
	.from("#logo", 0.5, { css: { left: -60 }, ease: Power1.easeOut })
	.from("#headline-1", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut })
	.from("#headline-1", 3.5, {}) //Pause
	.to("#headline-1, #tv-wrapper", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut })
	.from("#headline-2", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut })
	.from("#cta-wrapper", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut });
