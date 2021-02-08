// JavaScript Document

var tl = new TimelineMax({});


// Main Timeline

tl.from("#blue-bg", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#logo-1", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-1a", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#headline-1b", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#headline-1c", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#logo-2", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.to("#blue-bg", .5, {
	css: { height: 299 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#product", .65, {
	css: { y: 300 },
	ease: Power1.easeOut,
	delay: -0.4,
});

tl.to("#headline-1a, #headline-1b, #headline-1c, #logo-2, #product", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2.5,
});

tl.to("#blue-bg", .5, {
	css: { height: 16 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#headline-2a", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-2b", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#headline-2c", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-2d", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#subhead", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});