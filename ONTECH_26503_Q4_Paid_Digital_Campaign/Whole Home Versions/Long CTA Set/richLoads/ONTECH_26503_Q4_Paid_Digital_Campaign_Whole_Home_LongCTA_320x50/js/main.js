
// Timeline
const tl = new TimelineMax({ delay: 0.5 });

let PowerEase = Power1.easeOut;

tl.from("#container", .5, { opacity: 0 })
	.from("#beacon", .5, { scale: 17.0, left: 420, top: 150, ease: Power1.easeOut }, "beacon")
	.from("#logo", .5, { opacity: 0, ease: PowerEase }, "beacon+=0.35")
	.from("#google-screen", .5, { y: 50, ease: Back.easeOut.config(.75) }, "beacon+=0.5")
	.from("#header", .5, { opacity: 0 }, "beacon+=0.75")
	.from("#header", 1.5, {}) // Delay
	.to("#google-screen", .5, { y: -50, ease: Back.easeIn.config(.75) }, "google-out")
	.to("#header", .5, { opacity: 0 }, "google-out")
	.to("#beacon", .65, { width: 16, height: 16, y: -12, ease: Back.easeInOut.config(1.5) }, "google-out+=0.25")
	.to("#logo", .65 , { width: 49, height: 11, y: -12, ease: Back.easeInOut.config(1.5) }, "google-out+=0.25")
	.from("#google-logo", .5, { opacity: 0 },  "google-out+=0.5")
	.from("#rule", .5, { opacity: 0 },  "google-out+=0.25")
	.from("#subhead", .5, { opacity: 0 },  "google-out+=0.75")
	.from("#cta-wrapper, #arrow, #restrictions", .5, { opacity: 0 },  "google-out+=1")
	.from(".image-container", .5, { y: 90, ease: Power2.easeOut },  "google-out+=0.75")
	.to("#ontech-lady", 5, { scale: 1.1, }, "subhead")
	
