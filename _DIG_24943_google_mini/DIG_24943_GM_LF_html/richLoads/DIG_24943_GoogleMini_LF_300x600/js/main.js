// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#logo", .5, {
	css: { top: -28 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#product", .5, {
	css: { left: 300 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.to("#background, #product", .75, {
	css: { x: 90 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.to("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#google", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});