// JavaScript Document

var tl = new TimelineMax({});


// Main Timeline

tl.from("#blue-bg", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#logo", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#blue-bg", 0.5, {
	css: { width: 161 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#product", .65, {
	css: { x: 161 },
	ease: Power1.easeOut,
	delay: -0.35,
});

tl.to("#product", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2.5,
});

tl.to("#blue-bg", 0.5, {
	css: { width: 8 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#google-wrapper", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-1a", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#headline-1b", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.to("#headline-1a, #headline-1b", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 200,
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

tl.to("#headline-2a, #headline-2b", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2.5,
});

tl.from("#subhead-a", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#subhead-b", .5, {
	css: { x: -7, opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});