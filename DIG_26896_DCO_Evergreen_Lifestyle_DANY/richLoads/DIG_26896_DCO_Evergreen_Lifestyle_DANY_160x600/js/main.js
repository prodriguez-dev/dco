// Variables
const bannerWidth = document.getElementById("container").clientWidth;
let logoWidth = document.getElementById("logo").clientWidth;
let logoOffsetLeft = document.getElementById("logo").offsetLeft;
let logoDistanceLeft = bannerWidth - logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });

main
  .set("#bg", { x: -160 })
  .from("#container", 0.5, { opacity: 0 })
  .from("#logo", 0.4, { x: logoDistanceLeft, ease: "back.out(1)" }, "start-1")
  .to("#bg", 0.4, {  x: -146, ease: "back.out(1)" }, "start-1")
  .from("#header-1", 1.5, {}) // Delay

  .to("#bg", 0.7, { x: 0, ease: "power4.inOut" }, "header-1-in")
  .from("#header-1", 0.4, { opacity: 0, y: 4 }, "header-1-in+=0.3")
  .from("#header-2", 0.4,{ y: 4, opacity: 0 }, "header-1-in+=0.4")

  .from("#cta-button, #cta-button-inset",0.5,{ opacity: 0, y: 4, ease: "back.out(6)" },"header-1-in+=0.6")
  .from("#restrictions",0.5,{ opacity: 0, y: 4, ease: "back.out(6)" },"header-1-in+=0.7");


