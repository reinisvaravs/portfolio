import { forwardRef, useLayoutEffect } from "react";
import portret from "../assets/portret.webp";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import postgressql from "../assets/postgressql.svg";
import node from "../assets/node.svg";
import ex from "../assets/express.svg";
import discord from "../assets/discord.svg";
import react from "../assets/react.svg";
import stripe from "../assets/stripe.svg";
import openai from "../assets/openai.svg";
import css from "../assets/css.svg";
import make from "../assets/make.svg";
import apify from "../assets/apify.svg";
import gsap_logo from "../assets/gsap.svg";
import js from "../assets/js.svg";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  const headingRef = useRef(null);
  const nameRef = useRef(null);

  const words =
    `                     I’m an AI automation engineer from Latvia focused on helping businesses run faster and more efficiently through smart no-code systems. Using tools like Make and OpenAI — and backed by my full-stack experience with the PERN stack (PostgreSQL, Express, React, Node.js) — I build powerful automations that eliminate manual work and boost performance.`.split(
      " "
    );

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".techItem", {
        opacity: 0.5,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".techGrid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

 

  const tech = [
    { name: "Javascript", icon: js },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: ex },
    { name: "PostgreSQL", icon: postgressql },
    { name: "React", icon: react },
    { name: "CSS", icon: css },
    { name: "Stripe", icon: stripe },
    { name: "Discord.js", icon: discord },
    { name: "GSAP", icon: gsap_logo },
  ];

  const makeTech = [
    { name: "Make", icon: make },
    { name: "Apify", icon: apify },
    { name: "OpenAI", icon: openai },
  ];

  return (
    <>
      <h1 className="techGridH1">Tech stack</h1>
      <div className="techGrid">
        {tech.map((item, i) => (
          <div className="techItem" key={i}>
            <img src={item.icon} alt={item.name} className="techIcon" />
            <p className="techName">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="techGrid">
        {makeTech.map((item, i) => (
          <div className="techItem" key={i}>
            <img src={item.icon} alt={item.name} className="techIcon" />
            <p className="techName">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="aboutSection" ref={ref}>
        <div className="about textHeading" ref={nameRef}>
          <h1 className="nameAnim">Hello. I am Reinis</h1>
          <h2 className="nameAnim">Roberts Vāravs</h2>
          <p ref={headingRef}>
            {words.map((word, i) => (
              <span
                key={i}
                className="split-child"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  marginRight: "8px",
                }}
              >
                <span style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
          </p>
        </div>
        <div className="portretDiv">
          <img src={portret} alt="Reinis photo" className="portret" />
          <div className="portretBorder" />
        </div>
      </div>
    </>
  );
});

export default About;
