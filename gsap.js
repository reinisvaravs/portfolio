
gsap.to("#header-blur", {
  backdropFilter: "blur(5px)",
  scrollTrigger: {
    trigger: "#clock",
    start: "top top",
    end: "top -20%",
    toggleActions: "play none none reverse",
    scrub: true,
  },
});

