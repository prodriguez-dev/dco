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

tl.from("#red-1", 0.35, {
	css: { left: -177 },
	ease: Power1.easeOut,
	delay: -0.25
});

tl.from("#headline-1", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#red-1, #headline-1", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#background-2", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.35,
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

tl.to("#user, #query, #google-icon, #answer, #background-2, #google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2.5,
});

tl.from("#red-2, #headline-2", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#product", 0.5, {
	css: { top: 65 },
	ease: Power1.easeOut,
	delay: -0.5,
});

tl.from("#google-wrapper", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});