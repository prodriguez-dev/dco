// Variables
const bannerWidth = document.getElementById("container").clientWidth;
let logoWidth = document.getElementById("logo").clientWidth;
let logoOffsetLeft = document.getElementById("logo").offsetLeft;
let logoDistanceLeft = bannerWidth - logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main
  .from("#container", 0.5, { opacity: 0 }, "header-1")
  .from("#logo", 0.4, { x: logoDistanceLeft, ease: "back.out(1)" }, "header-1+=0.5")
  .from("#header-1", 0.4, { opacity: 0, y: 4 }, "header-1+=0.5")
  .from("#hopper", 1, { x: 70, ease: "power4.inOut"  }, "header-1+=0.25")
  .from("#header-1", 1.5, {}) // Delay
  .to("#header-1", 0.5, { y: 4, opacity: 0 }, "header-1-out")
  .to("#hopper", 0.5, { x: 70, ease: "power2.in"  }, "header-1-out-=0.2")
  .to("#logo", 0.5, { y: 14, ease: "power2.inOut" }, "header-1-out")

  .from("#header-2", 0.4, { opacity: 0, y: 4 }, "header-2-=0.1")
  .staggerFrom(".icon", 0.6, { y: 80, ease: "back.out(1)" }, 0.1, "header-2-=0.1")
  .from("#header-1", 1.5, {}) // Delay
  .to("#header-2", 0.5, { y: 4, opacity: 0 }, "header-2-out")
  .to("#hopper", 0.5, {  x: 285, ease: "power4.in"}, "header-2-out")
  .staggerTo(".icon", 0.6, { y: -80, ease: "back.in(1)"  }, 0.1, "header-2-out")


  .from("#header-3", 0.4, { opacity: 0, y: 4 }, "header-2-out+=0.5")
  .from( "#cta-button, #cta-button-inset", 0.5, { opacity: 0, y: 2, ease: "back.out(6)" }, "header-2-out+=0.7")
  .from( "#restrictions", 0.5, { opacity: 0, y: 2, ease: "back.out(6)" }, "header-2-out+=0.7")
