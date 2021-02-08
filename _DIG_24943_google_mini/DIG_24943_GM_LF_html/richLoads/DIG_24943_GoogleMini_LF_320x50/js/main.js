// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#logo, #divider, #google", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product", .5, {
	css: { left: 320 },
	ease: Power1.easeOut,
});

tl.to("#divider, #google", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.to("#background, #product", .75, {
	css: { x: 46 },
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

tl.to("#product", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});
