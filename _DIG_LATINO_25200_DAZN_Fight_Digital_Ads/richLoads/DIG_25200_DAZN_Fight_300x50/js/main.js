s// JavaScript Document

var tl = new TimelineMax({});

tl.from("#background-1, #background-solo", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.5,
});

tl.from("#logo", .5, {
	css: { left: -60 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#background-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1,
})

tl.from("#background-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#background-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
})

tl.from("#background-3", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#background-3", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
})

tl.from("#background-4", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});