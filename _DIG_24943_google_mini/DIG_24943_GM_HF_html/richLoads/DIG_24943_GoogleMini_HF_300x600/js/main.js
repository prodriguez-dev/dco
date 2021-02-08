// JavaScript Document

var tl = new TimelineMax({});

var tv = new TimelineMax({}).delay(-.16);

var lights = new TimelineMax({}).delay(-.75);

// Main Timeline

tl.from("#logo", .5, {
	css: { top: -23 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.add(tv);

tl.from("#tv-1", .65, {
	css: { left: 300 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#product-1", .5, {
	css: { left: 300 },
	ease: Power1.easeOut,
	delay: -0.25,
});

tl.from("#google-disclaimer", 0.5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#user-1", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: 0.15,
});

tl.from("#bubble-1", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#command-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#tv-2", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 0.75,
});

tl.to("#headline-1, #user-1, #command-1, #bubble-1, #tv-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1,
});

tl.from("#headline-2", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#user-2", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#bubble-2", 0.6, {
	css: { opacity: 0, y: -10 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#command-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.15,
});

tl.from("#background-2", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1,
});

tl.add(lights);

tl.to("#headline-2, #tv-bg, #tv-2, #user-2, #command-2, #bubble-2, #product-1, #google-disclaimer", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.25,
});

tl.from("#headline-3", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.05,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product-2", .5, {
	css: { left: 300 },
	ease: Power1.easeOut,
});

tl.from("#google", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

// TV

tv.from("#tv-bg", .65, {
	css: { left: 300 },
	ease: Power1.easeOut,
});

// Lights Out

lights.to("#headline-2, #google-disclaimer", 0.75, {
	css: { color: "#FFFFFF" },
	ease: Power1.easeOut,
});