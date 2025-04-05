import { forwardRef, useLayoutEffect } from "react";
import portret from "../assets/portret.webp";
import portretAnime from "../assets/portretAnime.webp";
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

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  const headingRef = useRef(null);
  const nameRef = useRef(null);

  const words =
    `                     I’m a full-stack developer and student in Latvia, focused on solving real-world tech problems. I work mainly with JavaScript and PostgreSQL using the PERN stack, and have built AI tools with OpenAI and RAG systems, animated interfaces with GSAP, and developed bots with Discord.js. I’m currently exploring startup ideas and open to joining early-stage teams. Let’s connect!`.split(
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

  useEffect(() => {
    gsap.from(".techItem", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".techGrid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const tech = [
    { name: "Node.js", icon: node },
    { name: "Express", icon: ex },
    { name: "PostgreSQL", icon: postgressql },
    { name: "React", icon: react },
    { name: "CSS", icon: css },
    { name: "Stripe", icon: stripe },
    { name: "OpenAI", icon: openai },
    { name: "Discord.js", icon: discord },
  ];

  return (
    <>
      <div className="techGrid">
        {tech.map((item, i) => (
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
          <div className="card">
            <div className="card-face front">
              <img src={portret} alt="Reinis photo" className="portret" />
            </div>
            <div className="card-face back">
              <img
                src={portretAnime}
                alt="Animated Reinis"
                className="portret"
              />
            </div>
          </div>
          <div className="portretBorder" />
        </div>
      </div>
    </>
  );
});

export default About;
