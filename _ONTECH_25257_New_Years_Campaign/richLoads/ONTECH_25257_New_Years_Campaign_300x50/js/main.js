
//////////////////////  Creating the Confetti Class   //////////////////////
class ConfettiParticle {
	constructor (context, width, height) {
		this.context = context;
		this.width = width;
		this.height = height;
		this.color = '';
		this.lightness = 50;
		this.diameter = 0;
		this.tilt = 0;
		this.tiltAngleIncrement = 0;
		this.tiltAngle = 0;
		this.particleSpeed = -3;
		this.waveAngle = 0;
		this.x = 0;
		this.y = 0;
		this.reset();
	}

	reset() {
		this.lightness = Math.floor(Math.random() * 90) + 50
		this.colorArray = ["#D4AC35", "#E4D064 ", "#DBDBDB", "#959595", "#0015EA"];
		this.colorPicker = this.colorArray[Math.floor(Math.random() * 6)];
		this.x = Math.random() * this.width;
		this.y = Math.random() * this.height - this.height;
		this.diameter = Math.random() * 6 + 4;
		this.tilt = 0;
		this.tiltAngleIncrement = Math.random() * 0.07 + 0.04;
		this.tiltAngle = 0;
	}

	update() {
		this.waveAngle += this.tiltAngleIncrement;
		this.tiltAngle += this.tiltAngleIncrement;
		this.tilt = Math.sin(this.tiltAngle) * 12;
		this.x += Math.sin(this.waveAngle);
		this.y += (Math.cos(this.waveAngle) + this.diameter + (this.particleSpeed)) * 0.4;
		if (this.complete()) this.reset();
	}

	complete() {
		return (this.y > this.height + 20);
	}

	draw() {
		let x = this.x + this.tilt;
		this.context.beginPath();
		this.context.lineWidth = this.diameter;
		this.context.strokeStyle = this.colorPicker;
		this.context.moveTo(x + this.diameter / 2, this.y);
		this.context.lineTo(x, this.y + this.tilt + this.diameter / 2);
		this.context.stroke();
	}
}

//////////////////////  Setup   //////////////////////
(function () {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let particles = [];

	// particle canvas
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	canvas.id = 'particle-canvas';
	canvas.width = width;
	canvas.height = height;
	document.body.appendChild(canvas);

	// create confetti particles 
	const createParticles = () => {
		particles = [];
		let total = 3;
		for (let i = 0; i < total; ++i) {
			particles.push(new ConfettiParticle(context, width, height));
		}
	};

	// animation loop function
	const animationFunc = () => {
		requestAnimationFrame(animationFunc);
		context.clearRect(0, 0, width, height);

		for (let p of particles) {
			p.width = width;
			p.height = height;
			p.update();
			p.draw();
		}
	};

	// start
	setTimeout(() => {
		createParticles();
		animationFunc();
	}, 850);

})();


console.log(window.innerWidth, " < this is the window's width")
console.log(window.innerHeight, " < this is the window's height")

// Greensock Timeline

var tl = new TimelineMax({});

tl.from("#beacon", .5, {
	scale: 25,
	ease: Power1.easeOut,
	left: window.innerWidth + 350,
	top: window.innerHeight,
	delay: 0.5,
});

tl.from("#logo", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: -.15,
});

tl.from("#headline", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	// delay: -.15,
});

tl.to("#headline", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#thermostat", .5, {
	css: { y: 50 },
	ease: Power1.easeOut,
	delay: -.25,
});

tl.from("#lightbulb", .5, {
	css: { y: 43 },
	ease: Power1.easeOut,
	delay: -.25,
});

tl.from("#google-mini", .5, {
	css: { y: 25 },
	ease: Power1.easeOut,
	delay: -.25,
});

//======= PT 2 =======//
tl.to("#thermostat, #google-mini, #lightbulb", .5, {
	css: { y: 50 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#headline-2", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.from("#subhead", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});

tl.to("#headline-2, #subhead", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
	delay: 2,
});

tl.from("#google-mini-2", .5, {
	css: { y: -55 },
	ease: Power1.easeOut,
	// delay: -.25,
});

tl.from("#lightbulb-2", .5, {
	css: { y: 53 },
	ease: Power1.easeOut,
	delay: -.5,
});

tl.from("#cta-wrapper", .5, {
	css: { opacity: 0 },
	ease: Power1.easeOut,
});
