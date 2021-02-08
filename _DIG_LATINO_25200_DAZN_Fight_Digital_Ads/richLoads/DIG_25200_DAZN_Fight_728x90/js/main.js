// JavaScript Document

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

tl.from("#headline", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#subhead-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#background-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: .5,
});

tl.from("#background-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	// delay: 1,
});