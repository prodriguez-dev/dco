// Variables
const bannerWidth = document.getElementById("container").clientWidth;
let logoWidth = document.getElementById("logo").clientWidth;
let logoOffsetLeft = document.getElementById("logo").offsetLeft;
let logoDistanceLeft = bannerWidth - logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });

main
  .from("#container", 0.5, { opacity: 0 })
  .from("#logo", 0.4, { x: logoDistanceLeft, ease: "back.out(1)" }, "start-1")

  .from("#header-1", 0.4, { opacity: 0, y: 4 }, "start-1")
  .from("#header-1", 1.5, {}) // Delay
  .to("#header-1",0.5,{ y: 4, opacity: 0 },"header-1-out")
  .to("#bg", 0.7, { x: -712, ease: "power4.inOut" }, "header-1-out")

  .from("#header-1", 1.5, {}) // Delay

  .to("#bg", 0.7, { x: 0, ease: "power4.inOut" }, "header-2-in")
  .from("#header-2",0.4,{ y: 4, opacity: 0 },"header-2-in+=0.3")
  .from("#cta-button, #cta-button-inset",0.5,{ opacity: 0, y: 4, ease: "back.out(6)" },"header-2-in+=0.4")
  .from("#restrictions",0.5,{ opacity: 0, y: 4, ease: "back.out(6)" },"header-2-in+=0.5");
