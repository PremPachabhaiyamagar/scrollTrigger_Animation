gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

ScrollTrigger.create({
  trigger: "container",
  start: "top top",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
  scrub: true,
});

const text = document.querySelector(".text");
console.log(text);
gsap.to(".box", {
  scrollTrigger: {
    onEnter: () => {
      text.innerHTML = "onEnter";
    },
    onLeave: () => {
      text.innerHTML = "onLeave";
    },
    onEnterBack: () => {
      text.innerHTML = "onEnterBack";
    },
    onLeaveBack: () => {
      text.innerHTML = "onLeaveback";
    },
    trigger: ".box",
    start: "top 60%",
    end: "bottom 40%",
    markers: true,
    triggerActions: "play pause resume reverse",
    scrub: true,
  },
  duration: 3,
  rotation: 180,
});
