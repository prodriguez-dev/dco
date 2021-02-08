// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#background-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#background-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#user", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
});

tl.from("#query", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#google-icon", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: 0.45,
});

tl.from("#answer", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.to("#user, #query, #google-icon, #answer, #headline-1, #background-2, #google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2.5,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#google-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});
