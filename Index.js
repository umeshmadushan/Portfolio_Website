const { innerHeight } = window;

gsap.from(".zoomOut .hero", {
  scale: 3,
  y: 160,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".zoomOut",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 2,
  },
});

const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const languages = scroller.querySelector(".languages");
    const scrollerContent = Array.from(languages.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden",true);
      languages.appendChild(duplicatedItem);
    });
  });
}