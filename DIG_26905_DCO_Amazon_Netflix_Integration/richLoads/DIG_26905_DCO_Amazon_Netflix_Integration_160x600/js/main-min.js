// Variables
const bannerWidth = document.getElementById('container').clientWidth;
let logoHeight = document.getElementById('logo').clientHeight;
let logoWidth = document.getElementById('logo').clientWidth;
let logoOffsetTop = document.getElementById('logo').offsetTop;
let logoOffsetLeft = document.getElementById('logo').offsetLeft;
let logoDistanceTop = logoHeight + logoOffsetTop;
let logoDistanceLeft = logoWidth + logoOffsetLeft;

let imageWidth = document.getElementById('image-2').clientHeight;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main.from("#container", 0.5, { opacity: 0 })
    .from('#logo', 0.5, { x: -logoDistanceLeft }, "start-1")
    .from('#image-2', 0.5, { y: imageWidth, ease: Power2.easeOut, }, "start-1")

    .from('#header-1', 0.5, { opacity: 0, y: 4 })
    .from('#header-1', 2, {}) // Delay
    .to('#header-1', 0.5, { opacity: 0, y: 4 })

    .from('#header-2', 0.5, { opacity: 0, y: 4 })
    .from('#header-2', 2, {}, "here") // Delay
    .to('#header-2', 0.5, { opacity: 0, y: 4 }, "leave-1")
    .to('#image-2', 0.5, { y: imageWidth, ease: Power2.easeIn, }, "leave-1")

    .from('#header-3', 0.5, { opacity: 0, y: 4 }, "start-2")
    .from('#image-3', 0.5, { y: imageWidth, ease: Power2.easeOut, }, "start-2+=0.2")
    .from('#header-3', 2, {}) // Delay
    .to('#header-3', 0.5, { opacity: 0, y: 4 }, "leave-2")
    .to('#image-3', 0.5, { y: imageWidth, ease: Power2.easeIn, }, "leave-2")

    .from('#header-4', 0.5, { opacity: 0, y: 4 }, "start-3")
    .from('#image-4', 0.5, { y: imageWidth, ease: Power2.easeOut, }, "start-3+=0.2")
    .from('#header-4', 2, {}) // Delay
    .to('#header-4', 0.5, { opacity: 0, y: 4 }, "leave-3")
    .to('#image-4', 0.5, { y: imageWidth, ease: Power2.easeIn, }, "leave-3")

    .from('#header-5', 0.5, { opacity: 0, y: 4 })
    .from('#cta-wrapper', 0.5, { opacity: 0, y: 4 });
