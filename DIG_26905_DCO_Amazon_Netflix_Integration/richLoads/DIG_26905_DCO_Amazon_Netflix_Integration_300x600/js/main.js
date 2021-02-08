// Variables
const bannerWidth = document.getElementById("container").clientWidth;
let logoWidth = document.getElementById("logo").clientWidth;
let logoOffsetLeft = document.getElementById("logo").offsetLeft;
let logoDistanceLeft = bannerWidth - logoOffsetLeft;

// Main Timeline
const main = new TimelineMax({ delay: 0.5 });
main
  .set("#hopper", {scale: 1.1})
  .from("#container", 0.5, { opacity: 0 }, "header-1")
  .from("#tv", 1, { y: -180, ease: "power4.inOut"  }, "header-1")
  .from("#logo", 0.4, { x: logoDistanceLeft, ease: "back.out(1)" }, "header-1+=0.5")
  .from("#header-1", 0.4, { opacity: 0, y: 4 }, "header-1+=0.5")
  .from("#hopper", 1, { x: 285, ease: "power4.inOut"  }, "header-1+=0.5")
  .from("#header-1", 1.5, {}) // Delay
  .to("#header-1", 0.5, { y: 4, opacity: 0 }, "header-1-out")
  
  .from("#header-2", 0.4, { opacity: 0, y: 4 }, "header-2")
  .staggerFrom(".icon", 0.6, { x: -185, ease: "back.out(1)" }, -0.1, "header-2")
  .to("#hopper", 0.75, {scale: .85, x: 25, y: 20, ease: "power4.inOut"  }, "header-2-=0.25")
  .from("#header-1", 1.5, {}) // Delay
  .to("#header-2", 0.5, { y: 4, opacity: 0 }, "header-2-out")
  .staggerTo(".icon", 1, { y: -33, ease: "back.inOut(1)" }, 0.1, "header-2-out")


  .from("#header-3", 0.4, { opacity: 0, y: 4 }, "header-2-out+=0.5")
  .from( "#cta-button, #cta-button-inset", 0.5, { opacity: 0, y: 4, ease: "back.out(6)" }, "header-2-out+=0.7")
  .from( "#restrictions", 0.5, { opacity: 0, y: 4, ease: "back.out(6)" }, "header-2-out+=0.7")
