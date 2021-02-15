// JavaScript Document

var container = document.getElementById("container"),
	w = 200,
	h = 850;

// Small Snowflakes
var flake1total = 200;

for (i = 0; i < flake1total; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'small-flakes' }, x: A(-230, w), y: A(-600, -320) });
	container.appendChild(Div);
	snow1(Div);
}
function snow1(flake1) {
	TweenMax.to(flake1, A(14, 80), { y: h + 100, x: A(0, w), ease: Linear.easeNone, repeat: -1, delay: -15 });
	TweenMax.to(flake1, A(24, 58), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(flake1, A(14, 10), { rotation: A(0, 160), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -1 });
};

// Medium Flakes #1
var flake2total = 4;

for (i = 0; i < flake2total; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'medium-flakes-1' }, x: B(-230, w), y: B(-650, -320) });
	container.appendChild(Div);
	snow2(Div);
}
function snow2(flake2) {
	TweenMax.to(flake2, B(13, 70), { y: h + 100, x: B(0, w), ease: Linear.easeNone, repeat: -1, delay: -4 });
	TweenMax.to(flake2, B(20, 45), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(flake2, B(4, 10), { rotation: B(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -8 });
};

// Medium Flakes #2
var flake3total = 5;

for (i = 0; i < flake3total; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'medium-flakes-2' }, x: C(-230, w), y: C(-650, -320) });
	container.appendChild(Div);
	snow3(Div);
}
function snow3(flake3) {
	TweenMax.to(flake3, C(9, 60), { y: h + 50, x: C(0, w), ease: Linear.easeNone, repeat: -1, delay: -3 });
	TweenMax.to(flake3, C(15, 35), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(flake3, C(4, 10), { rotation: C(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -7 });
};

// Medium Flakes #3
var flake4total = 6;

for (i = 0; i < flake4total; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'medium-flakes-3' }, x: D(-230, w), y: D(-650, -320) });
	container.appendChild(Div);
	snow4(Div);
}
function snow4(flake4) {
	TweenMax.to(flake4, D(11, 60), { y: h + 50, x: D(0, w), ease: Linear.easeNone, repeat: -1, delay: -2 });
	TweenMax.to(flake4, D(15, 35), { x: '+=15', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(flake4, D(4, 10), { rotation: D(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -6 });
};

// Large Flakes
var flake5total = 2;

for (i = 0; i < flake5total; i++) {
	var Div = document.createElement('div');
	TweenLite.set(Div, { attr: { class: 'large-flakes' }, x: E(-210, w), y: E(-740, -320) });
	container.appendChild(Div);
	snow5(Div);
}
function snow5(flake5) {
	TweenMax.to(flake5, E(4, 10), { y: h + 100, x: E(0, w), ease: Linear.easeNone, repeat: -1, delay: 1 });
	TweenMax.to(flake5, E(3, 8), { x: '+=30', repeat: -1, yoyo: true, ease: Sine.easeInOut });
	TweenMax.to(flake5, E(2, 6), { rotation: E(0, 175), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
};

// Functions creating  the snowflakes
function A(min, max) { return min + Math.random() * (max - min) };
function B(min, max) { return min + Math.random() * (max - min) };
function C(min, max) { return min + Math.random() * (max - min) };
function D(min, max) { return min + Math.random() * (max - min) };
function E(min, max) { return min + Math.random() * (max - min) };

// Banner Elements

var tl = new TimelineMax({});

tl.from("#background", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#logo", .5, {
	css: { top: -60 },
	ease: Power1.easeOut,
});

tl.from("#product-1", .75, {
	css: { bottom: -348 },
	ease: Power1.easeOut,
});

tl.from("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-1", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 3,
});

tl.to("#product-1", .5, {
	css: { opacity: 0 },
	ease: Power2.easeOut,
});

tl.from("#text-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#product-2", .5, {
	css: { right: -249 },
	ease: Power1.easeOut,
});

tl.from("#speech-bubble", .25, {
	css: { opacity: 0, scale: 0 },
	ease: Power1.easeOut,
});

tl.from("#speech-command", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#offer", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#speech-command", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.to("#speech-bubble", .25, {
	css: { opacity: 0, scale: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-2", .5, {
	css: { top: 27 },
	ease: Power1.easeOut,
});

tl.from("#product-3", .75, {
	css: { bottom: -141 },
	ease: Power1.easeOut,
});