import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupHoverAnimations(itemRef) {
  const item = itemRef.current;
  const img = item.querySelector(".workImg");

  gsap.set(img, {
    backgroundSize: "100%",
    backgroundPosition: "center",
  });

  const handleMouseOver = () => {
    gsap.to(img, {
      backgroundSize: "130%",
      backgroundPosition: "center",
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(item, {
      scale: 0.93,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  const handleMouseOut = () => {
    gsap.to(img, {
      backgroundSize: "100%",
      backgroundPosition: "center",
      duration: 1,
      ease: "power2.out",
    });
    gsap.to(item, {
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  };

  item.addEventListener("mouseover", handleMouseOver);
  item.addEventListener("mouseout", handleMouseOut);

  return () => {
    item.removeEventListener("mouseover", handleMouseOver);
    item.removeEventListener("mouseout", handleMouseOut);
  };
}

export function setupEntranceAnimations(itemRef) {
  const ctx = gsap.context(() => {
    const img = itemRef.current.querySelector(".workImg");
    const ontopDiv = itemRef.current.querySelector(".ontopDiv");

    gsap.from([img, ontopDiv], {
      duration: 0.5,
      y: 200,
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, itemRef);

  return () => ctx.revert();
}

export function setupTextEntranceAnimations(nameRef) {
  const ctx = gsap.context(() => {
    gsap.from(".nameAnim", {
      opacity: 0,
      rotate: "10deg",
      y: 100,
      scrollTrigger: {
        trigger: ".nameAnim",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, nameRef);

  return () => ctx.revert();
}
