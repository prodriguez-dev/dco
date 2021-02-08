// JavaScript Document

var tl = new TimelineMax({});

tl.from("#logo", .5, {
	css: { top: -20 },
	ease: Power1.easeOut,
});

tl.to("#giftcard", .75, {
	css: { opacity: 1 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#giftcard", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1,
});

tl.from("#headline-1", .5, {
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