function startAnimation() {

    const bannerWidth = document.getElementById('container').clientWidth;
    const subtleBounceIn = Back.easeOut.config(0.65);
    const subtleBounceOut = Back.easeIn.config(0.65);

    document.getElementById("container").style.opacity = 1;


    // Helper Logo Blink Function
    function logoBlink() {
        let logoBlink = new TimelineMax({});
        logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
            .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
        return logoBlink;
    }

    // Master Timeline
    const master = gsap.timeline({ delay: 0.5 });
    master.from("#sling-logo", 0.5, { y: -80, ease: subtleBounceIn })
        .from("#header-1", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, 0)
        .from("#donkey", 0.65, { x: -105, ease: Power4.easeOut }, "animals-in")
        .from("#elephant", 0.65, { x: 125, ease: Power4.easeOut }, "animals-in")
        .from("#cta-wrapper", 0.5, { y: 5, opacity: 0, ease: subtleBounceIn }, "animals-in")
        .to("#header-1", 1.5, {}) //delay
        .to("#header-1", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "header-1-out")
        .to("#donkey", 0.9, { scale: .40, x: 24, y: 12, ease: Power3.easeInOut, transformOrigin: "100% 50%" }, "header-1-out")
        .to("#elephant", 0.9, { scale: .44, x: -16, y: 25, ease: Power3.easeInOut, transformOrigin: "0% 50%" }, "header-1-out")
        .from("#header-2", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "header-1-out+=0.5")
        .to("#header-1", 1.7, {}) //delay
        .to("#header-2", 0.5, { x: bannerWidth, ease: subtleBounceOut }, "header-2-out")
        .from("#header-3", 0.5, { x: -bannerWidth, ease: subtleBounceIn }, "header-3-in")
        .add(logoBlink(), "header-3-in");
};

