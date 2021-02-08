
// Timeline
const tl = new TimelineMax({ delay: 0.5 });
let PowerEase = Power1.easeOut;

tl.from("#container", .5, { opacity: 0 })
    .from("#beacon", .5, { scale: 17.0, left: 575, top: 200, ease: Power1.easeOut }, "beacon")
    .from("#logo", .5, { opacity: 0, ease: PowerEase }, "beacon+=0.35")
    .from("#google-screen", .5, { x: 160, ease: Back.easeOut.config(.75) }, "beacon+=0.5")
    .from("#header", .5, { opacity: 0 }, "beacon+=0.75")
    .from("#header", 1.5, {}) // Delay
    .to("#google-screen", .5, { x: 160, ease: Back.easeIn.config(.75) }, "google-out")
    .to("#header", .5, { opacity: 0 }, "google-out")
    .from("#google-logo", .5, { opacity: 0 }, "subhead")
    .from("#rule", .5, { opacity: 0 }, "subhead")
    .from("#subhead", .5, { opacity: 0 }, "subhead+=0.25")
    .from("#cta-wrapper, #arrow, #restrictions", .5, { opacity: 0 }, "subhead+=0.5")
    .from(".image-container", .5, { x: 280, ease: Power2.easeOut }, "subhead+=0.5")
    .to("#ontech-lady", 5, { scale: 1.1, }, "subhead");

