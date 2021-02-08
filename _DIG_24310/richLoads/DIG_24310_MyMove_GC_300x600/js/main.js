// JavaScript Document

var tl = new TimelineMax({});

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#logo", .5, {
	css: { top: -60 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#giftcard", .5, {
	css: { right: -148 },
	ease: Power1.easeOut,
});

tl.from("#subhead", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#headline-2, #asterisk, #disclaimer", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});