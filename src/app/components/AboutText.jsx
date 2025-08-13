"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function AboutText() {
  const headingRef = useRef(null);
  const nameRef = useRef(null);

  const aboutText =
    "I like programming and integrating AI into my work. Currently, I mainly use JavaScript and n8n. I program chatbots, AI agents, and automation systems. Founder of Setinbound.com, where I offer AI chatbot and AI call agent creation for other businesses.";

  const words = aboutText.split(" ");

  useEffect(() => {
    const el = headingRef.current;

    // Clear content first
    el.innerHTML = "";

    // Wrap each word
    words.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.className = "split-child";
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.marginRight = "8px";

      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.display = "inline-block";

      wrapper.appendChild(inner);
      el.appendChild(wrapper);
    });

    const splitWords = headingRef.current.querySelectorAll(".split-child span");
    gsap.from(splitWords, {
      yPercent: 100,
      stagger: 0.01,
      rotate: "5deg",
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nameAnim", {
        opacity: 0,
        rotate: "5deg",
        y: 100,
        scrollTrigger: {
          trigger: ".nameAnim",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      });
    }, nameRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.from(".portretBorder", {
      transform: "translate(0, 0)",
      scrollTrigger: {
        trigger: ".portretBorder",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="about textHeading" ref={nameRef}>
      <h1 className="nameAnim">Hello. I am Reinis</h1>
      <h2 className="nameAnim">Roberts Varavs</h2>
      <p ref={headingRef}>
        {words.map((word, i) => (
          <span key={i} className="split-child">
            <span style={{ display: "inline-block" }}>{word}</span>
          </span>
        ))}
      </p>
    </div>
  );
}

export default AboutText;
