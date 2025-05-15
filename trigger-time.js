gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to("#page3 h1", {
  transform: "translateX(250%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
