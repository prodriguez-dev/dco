// JavaScript Document

var tl = new TimelineMax({});


// Main Timeline

tl.from("#logo", 0.5, {
	css: { left: -41 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#product-1", .5, {
	css: { left: 320 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.to("#headline-1, #product-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#google, #product-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#google", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1,
});

tl.to("#product-2", .5, {
	css: { x: -84 },
	ease: Power1.easeOut,
});

tl.to("#product-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});