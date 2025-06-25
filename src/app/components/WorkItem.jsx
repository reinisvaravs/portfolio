"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { openPopup } from "./openPopup.jsx";
import {
  setupHoverAnimations,
  setupEntranceAnimations,
  setupTextEntranceAnimations,
} from "./initWorkItemAnimations.js";

gsap.registerPlugin(ScrollTrigger);

function WorkItem({ name, bg, link, linkText, description, tech }) {
  const itemRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.to(".bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".work",
        start: "top bottom", // Start when .work hits bottom of viewport
        end: "70% bottom", // End when .work is fully in view
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".selectedCasesDiv", {
      opacity: 0,
      rotate: "5deg",
      y: 100,
    });
    gsap.to(".selectedCasesDiv", {
      opacity: 1,
      rotate: "0deg",
      y: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".selectedCasesDiv",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleOpen = (e) => {
    e.stopPropagation();
    const img = itemRef.current.querySelector(".workImg");
    openPopup({ img, name, link, linkText, description, tech });
  };

  useEffect(() => {
    return setupHoverAnimations(itemRef);
  }, []);

  useLayoutEffect(() => {
    return setupEntranceAnimations(itemRef);
  }, []);

  useLayoutEffect(() => {
    return setupTextEntranceAnimations(nameRef);
  }, []);

  return (
    <div className="workItem">
      <div className="workImgDiv" ref={itemRef}>
        <div
          className="workWebsite workImg"
          style={{ backgroundImage: `url(${bg})` }}
          onClick={(e) => handleOpen(e)}
        ></div>
        <div className="ontopDiv">
          <h1 onClick={(e) => handleOpen(e)}>{name}</h1>
        </div>
      </div>
      <div className="workTextDiv" ref={nameRef}>
        <h1 className="nameAnim" onClick={(e) => handleOpen(e)}>
          {name}
        </h1>
      </div>
    </div>
  );
}

export default WorkItem;
