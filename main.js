gsap.from("#presentation > #text", {
    duration: 2, text: "", ease: "power2"
});


gsap.from("#competence i", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    scrollTrigger: {
        trigger: "#competence",
        start: "50% bottom",
    }
})

