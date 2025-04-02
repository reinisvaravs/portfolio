import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createRoot } from "react-dom/client";
import PopupContent from "../components/PopupContent";

gsap.registerPlugin(ScrollTrigger);

let popupContainer = null;
let clone = null;
let originalImg = null;

export function openPopup({ img, name, link, description, tech }) {
  originalImg = img;
  clone = img.cloneNode(true);
  clone.classList.add("fixedPopup");
  img.style.opacity = 0;
  document.body.appendChild(clone);

  gsap.set(clone, {
    position: "fixed",
    top: img.getBoundingClientRect().top,
    left: img.getBoundingClientRect().left,
    zIndex: 9999,
  });

  gsap.to(clone, {
    top: "50%",
    left: "70%",
    xPercent: -50,
    yPercent: -50,
    width: 450,
    height: 250,
    ease: "power1",
    duration: 1,
  });

  gsap.to("header", {
    y: "-100%",
    duration: 0.6,
    ease: "power2.inOut",
  });

  gsap.to(".progressBarDiv", {
    y: "-70px",
    duration: 0.6,
    ease: "power2.inOut",
  });

  setTimeout(() => {
    clone.classList.add("fixedPopupLater");
  }, 1000);

  popupContainer = document.createElement("div");
  popupContainer.classList.add("popupWrapper");
  document.body.appendChild(popupContainer);

  createRoot(popupContainer).render(
    <PopupContent name={name} link={link} description={description} tech={tech} />
  );

  gsap.set(popupContainer, {
    position: "fixed",
    top: "50%",
    left: "50px",
    yPercent: -50,
    zIndex: 998,
    opacity: 0,
    padding: "20px",
  });

  gsap.to(popupContainer, {
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  setTimeout(() => {
    gsap.fromTo(
      popupContainer.querySelector(".popupHeading"),
      { opacity: 0, rotate: "5deg", y: 100 },
      { opacity: 1, rotate: 0, y: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      popupContainer.querySelector(".popupParagraph"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2 }
    );

    const popupLinks = popupContainer.querySelectorAll(".popupLink");

    popupLinks.forEach((linkEl, index) => {
      gsap.fromTo(
        linkEl,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5 + index * 0.2, // staggered appearance
        }
      );
    });
  }, 10);

  const appContent = document.querySelector(".appContent");
  if (appContent) appContent.classList.add("hidden");

  gsap.to(".bg", {
    opacity: 0.5,
    duration: 0.8,
  });

  document.body.style.overflow = "hidden";

  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === ".work") {
      trigger.kill();
    }
  });
}

export function closePopup() {
  if (!popupContainer || !clone) return;

  gsap.set("header", { y: "0%" });
  gsap.set(".progressBarDiv", { y: "0px" });

  // Animate out
  gsap.to([popupContainer, clone], {
    opacity: 0,
    duration: 0.6,
    onComplete: () => {
      popupContainer.remove();
      clone.remove();

      if (originalImg) {
        originalImg.style.opacity = "1";
        originalImg = null;
      }

      popupContainer = null;
      clone = null;

      // Restore scroll
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Show app content again
      const appContent = document.querySelector(".appContent");
      if (appContent) appContent.classList.remove("hidden");

      gsap.fromTo(
        "header",
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".progressBarDiv",
        { y: "-70px" },
        {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        "header",
        { backdropFilter: "blur(0px)" },
        {
          backdropFilter: "blur(5px)",
          duration: 2,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    },
  });

  // Restore background
  gsap.to(".bg", {
    onComplete: () => {
      // Re-enable ScrollTrigger once opacity is restored
      ScrollTrigger.create({
        trigger: ".work",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          gsap.to(".bg", {
            opacity: 1 - self.progress, // fade from 1 to 0
            overwrite: true,
            duration: 0.2,
          });
        },
      });
    },
  });
}
