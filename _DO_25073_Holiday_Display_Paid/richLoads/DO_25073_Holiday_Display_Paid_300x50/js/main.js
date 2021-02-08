// JavaScript Document

var tl = new TimelineMax({});

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.5,
});

tl.from("#logo", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#present", .5, {
	css: { x: 200 },
	ease: Power1.easeOut,
});

tl.to("#headline, #present", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#football, #cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});