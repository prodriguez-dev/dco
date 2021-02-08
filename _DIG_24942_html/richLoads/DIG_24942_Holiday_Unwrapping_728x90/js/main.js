// Confetti cluster

TweenLite.set("#container")

var container = document.getElementById("container"),
	w = 800,
	h = 200;

// Small confetti Gold
var confetti_small_gold = 3;

for (i = 0; i < confetti_small_gold; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-small-gold' }, x: A(-650, 200), y: A(-500, -200) });
	container.appendChild(Div);
	cluster1(Div);
}
function cluster1(confetti1) {
	TweenMax.to(confetti1, A(14, 80), { y: h + 100, x: A(0, w), ease: Linear.easeNone, repeat: -1, delay: -15 });
	TweenMax.to(confetti1, A(24, 58), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti1, A(14, 10), { rotation: A(0, 190), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -1 });
};

// Small confetti Red
var confetti_small_red = 2;

for (i = 0; i < confetti_small_red; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-small-red' }, x: A(-650, -50), y: A(-500, -200) });
	container.appendChild(Div);
	cluster2(Div);
}
function cluster2(confetti2) {
	TweenMax.to(confetti2, B(13, 30), { y: h + 100, x: B(0, w), ease: Linear.easeNone, repeat: -1, delay: -14 });
	TweenMax.to(confetti2, B(20, 25), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti2, B(4, 10), { rotation: B(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -8 });
};

// Medium confetti
var confetti_medium = 3;

for (i = 0; i < confetti_medium; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti_medium' }, x: A(-950, -100), y: A(-500, -200) });
	container.appendChild(Div);
	cluster3(Div);
}
function cluster3(confetti3) {
	TweenMax.to(confetti3, C(9, 20), { y: h + 50, x: C(0, w), ease: Linear.easeNone, repeat: -1, delay: -23 });
	TweenMax.to(confetti3, C(15, 25), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti3, C(4, 10), { rotation: C(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -7 });
};

// Large confetti
var confetti_large = 2;

for (i = 0; i < confetti_large; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-large' }, x: A(-850, -150), y: A(-500, -200) });
	container.appendChild(Div);
	cluster4(Div);
}
function cluster4(confetti4) {
	TweenMax.to(confetti4, D(11, 20), { y: h + 50, x: D(0, w), ease: Linear.easeNone, repeat: -1, delay: -2 });
	TweenMax.to(confetti4, D(15, 25), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti4, D(4, 10), { rotation: D(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -6 });
};

// Large confetti Gold
var confetti_large_gold = 1;

for (i = 0; i < confetti_large_gold; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-large-gold' }, x: A(-650, 50), y: A(-500, -200) });
	container.appendChild(Div);
	cluster5(Div);
}
function cluster5(confetti5) {
	TweenMax.to(confetti5, E(13, 8), { y: h + 100, x: E(0, w), ease: Linear.easeNone, repeat: -1, delay: -1 });
	TweenMax.to(confetti5, E(12, 7), { x: '+=12', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti5, E(11, 6), { rotation: E(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

// Functions creating  the snowflakes
function A(min, max) { return min + Math.random() * (max - min) };
function B(min, max) { return min + Math.random() * (max - min) };
function C(min, max) { return min + Math.random() * (max - min) };
function D(min, max) { return min + Math.random() * (max - min) };
function E(min, max) { return min + Math.random() * (max - min) };

// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#logo", .5, {
	css: { left: -65 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#gift-1", .65, {
	css: { y: 143 },
	ease: Power1.easeOut,
});

tl.from("#gift-2", .65, {
	css: { y: 143 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
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
	delay: 1.5,
});

tl.from("#headline-2", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#headline-3", .75, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});