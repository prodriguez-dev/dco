
var tl = new TimelineMax({});

tl.from("#background, #tv-wrapper", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut }, "+=0.5")
	.from("#logo", 0.5, { css: { top: -60 }, ease: Power1.easeOut })
	.from("#headline", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut })
	.from("#subhead", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut })
	.from("#cta-wrapper", 0.5, { css: { opacity: 0 }, ease: Power1.easeOut });




