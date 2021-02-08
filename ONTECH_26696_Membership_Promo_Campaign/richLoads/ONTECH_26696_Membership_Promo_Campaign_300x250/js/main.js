
// Timeline
const tl = new TimelineMax({ delay: 0.5 });
let PowerEase = Power1.easeOut;

tl.from("#container", .5, { opacity: 0 })
    .from("#beacon", .5, { scale: 17.0, left: 575, top: 200, ease: Power1.easeOut }, "beacon")
    .from("#logo", .5, { opacity: 0, ease: PowerEase }, "beacon+=0.35")
    .from("#google-logo, #rule", .5, { opacity: 0 }, "beacon+=0.65")
    .from("#exclusive-text", .5, { opacity: 0 }, "beacon+=1")
    .from("#product", .5, { x: 160, ease: Power3.easeOut }, "beacon+=1")
    .from("#header", .5, { opacity: 0 }, "beacon+=1")
    .from("#cta-wrapper, #arrow, #restrictions, #save-text", .5, { opacity: 0 }, "beacon+=1.5")
    .from("#header", 1.5, {}) // Delay
    .to("#product", .5, { x: 160, ease: Power3.easeIn }, "product-out")
    .to("#header", .5, { opacity: 0 }, "product-out")
    .from("#subhead", .5, { opacity: 0 }, "subhead")
    .from(".image-container", .5, { x: 280, ease: Power2.easeOut }, "subhead")
    .to("#ontech-person", 5, { scale: 1.1, }, "subhead");

