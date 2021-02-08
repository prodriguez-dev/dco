// JavaScript Document

var tl = new TimelineMax({});

var dot1 = new TimelineMax({}).delay(-0.3);
var dot2 = new TimelineMax({}).delay(-0.15);
var dot3 = new TimelineMax({}).delay(0);
var dot4 = new TimelineMax({}).delay(0.15);

// Main Timeline

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#dot-1, #dot-2, #dot-3, #dot-4", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#dish-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#line-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#google-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#product", .5, {
	css: { top: 13 },
	ease: Power1.easeOut,
});

tl.add(dot1);
tl.add(dot2);
tl.add(dot3);
tl.add(dot4);

tl.to("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#subhead", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});


// Dot1

dot1.to("#dot-1", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot1.to("#dot-1", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot1.to("#dot-1", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

dot1.to("#dot-1", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot1.to("#dot-1", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot1.to("#dot-1", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

// Dot2

dot2.to("#dot-2", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot2.to("#dot-2", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot2.to("#dot-2", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

dot2.to("#dot-2", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot2.to("#dot-2", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot2.to("#dot-2", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

// Dot3

dot3.to("#dot-3", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot3.to("#dot-3", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot3.to("#dot-3", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

dot3.to("#dot-3", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot3.to("#dot-3", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot3.to("#dot-3", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

// Dot4

dot4.to("#dot-4", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot4.to("#dot-4", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot4.to("#dot-4", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});

dot4.to("#dot-4", 0.4, {
	css: { y: -5 },
	ease: Power1.easeOut,
});

dot4.to("#dot-4", 0.8, {
	css: { y: 5 },
	ease: Power1.easeInOut,
});

dot4.to("#dot-4", 0.4, {
	css: { y: 0 },
	ease: Power1.easeIn,
});
