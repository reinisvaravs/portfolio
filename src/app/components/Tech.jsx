"use client";

import { useLayoutEffect, useRef } from "react";
import { techStacks } from "../config/techIcons";
import gsap from "gsap";

function Tech({ category }) {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.querySelectorAll(".techItem"), {
        opacity: 0.5,
        y: 30,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="techGrid" ref={gridRef}>
      {techStacks[category].map((item, i) => (
        <div className="techItem" key={i}>
          <img src={item.icon} alt={item.name} className="techIcon" />
          <p className="techName">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Tech;
