// Confetti cluster

TweenLite.set("#container")

var container = document.getElementById("container"),
	w = 130,
	h = 350;

// Small confetti Gold
var confetti_small_gold = 3;

for (i = 0; i < confetti_small_gold; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-small-gold' }, x: A(-350, w), y: A(-450, -125) });
	container.appendChild(Div);
	cluster1(Div);
}
function cluster1(confetti1) {
	TweenMax.to(confetti1, A(10, 70), { y: h + 100, x: A(0, w), ease: Linear.easeNone, repeat: -1, delay: -5 });
	TweenMax.to(confetti1, A(8, 52), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti1, A(6, 40), { rotation: A(0, 190), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -9 });
};

// Small confetti Red
var confetti_small_red = 2;

for (i = 0; i < confetti_small_red; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-small-red' }, x: B(-350, w), y: B(-450, -125) });
	container.appendChild(Div);
	cluster2(Div);
}
function cluster2(confetti2) {
	TweenMax.to(confetti2, B(10, 70), { y: h + 100, x: B(0, w), ease: Linear.easeNone, repeat: -1, delay: -5 });
	TweenMax.to(confetti2, B(8, 52), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti2, B(6, 40), { rotation: B(0, 160), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -9 });
};

// Medium confetti
var confetti_medium = 2;

for (i = 0; i < confetti_medium; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-medium' }, x: C(-350, w), y: C(-480, -125) });
	container.appendChild(Div);
	cluster3(Div);
}
function cluster3(confetti3) {
	TweenMax.to(confetti3, C(9, 60), { y: h + 50, x: C(0, w), ease: Linear.easeNone, repeat: -1, delay: -3 });
	TweenMax.to(confetti3, C(15, 35), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti3, C(4, 10), { rotation: C(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -7 });
};

// Large confetti
var confetti_large = 1;

for (i = 0; i < confetti_large; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-large' }, x: D(-380, 110), y: D(-380, -150) });
	container.appendChild(Div);
	cluster4(Div);
}
function cluster4(confetti4) {
	TweenMax.to(confetti4, D(9, 60), { y: h + 50, x: D(0, w), ease: Linear.easeNone, repeat: -1, delay: 1 });
	TweenMax.to(confetti4, D(15, 35), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti4, D(4, 10), { rotation: D(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

// Large confetti Gold
var confetti_large_gold = 1;

for (i = 0; i < confetti_large_gold; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'confetti-large-gold' }, x: D(-380, 110), y: D(-380, -150) });
	container.appendChild(Div);
	cluster5(Div);
}
function cluster5(confetti5) {
	TweenMax.to(confetti5, D(9, 60), { y: h + 50, x: D(0, w), ease: Linear.easeNone, repeat: -1, delay: 1 });
	TweenMax.to(confetti5, D(15, 35), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(confetti5, D(4, 10), { rotation: D(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

// Functions creating  the clusterflakes
function A(min, max) { return min + Math.random() * (max - min) };
function B(min, max) { return min + Math.random() * (max - min) };
function C(min, max) { return min + Math.random() * (max - min) };
function D(min, max) { return min + Math.random() * (max - min) };
function E(min, max) { return min + Math.random() * (max - min) };

// JavaScript Document

var tl = new TimelineMax({});

// Main Timeline

tl.from("#logo", .5, {
	css: { left: -73 },
	ease: Power1.easeOut,
	delay: 0.25,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#gift-1", .55, {
	css: { y: 143 },
	ease: Power1.easeOut,
});

tl.to("#gift-1-ribbon", .5, {
	css: { y: 24 },
	ease: Power1.easeOut,
});

tl.to("#gift-1-top", .7, {
	css: { x: -105, y: -300, rotation: -34 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.35,
});

tl.to("#gift-1, #headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#gift-2", .55, {
	css: { y: 134 },
	ease: Power1.easeOut,
});

tl.to("#gift-2-ribbon", .5, {
	css: { top: 173 },
	ease: Power1.easeOut,
});

tl.to("#gift-2-top, #gift-2-bow", .7, {
	css: { x: 102, y: -270, rotation: 45 },
	ease: Power1.easeOut,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -0.35,
});

tl.to("#gift-2, #headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 1.5,
});

tl.from("#headline-3", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product", .5, {
	css: { left: 300 },
	ease: Power1.easeOut,
	delay: -0.25,
});