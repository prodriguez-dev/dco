// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#background-1", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#logo", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product", .5, {
	css: { top: 250 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#background-2", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.5,
});

tl.from("#google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#user", 0.6, {
	css: { opacity: 0, y: -12 },
	ease: Power1.easeOut,
});

tl.from("#query", 0.6, {
	css: { opacity: 0, y: -12 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#google-icon", 0.6, {
	css: { opacity: 0, y: -12 },
	ease: Power1.easeOut,
	delay: 0.65,
});

tl.from("#answer", 0.6, {
	css: { opacity: 0, y: -12 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.to("#headline-1, #user, #query, #google-icon, #answer, #background-2, #google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#headline-2", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#google-wrapper", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});
