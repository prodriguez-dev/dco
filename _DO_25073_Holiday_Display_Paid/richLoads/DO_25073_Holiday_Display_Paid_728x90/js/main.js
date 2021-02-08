// JavaScript Document

var tl = new TimelineMax({});

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.5,
});

tl.from("#logo", .5, {
	css: { top: -60 },
	ease: Power1.easeOut,
});

tl.from("#headline", .5, {
	css: { opacity: 0 },
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

tl.from("#present", .5, {
	css: { x: 150 },
	ease: Power1.easeOut,
});

tl.to("#headline, #subhead, #present", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#family, #headline-2, #family", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

