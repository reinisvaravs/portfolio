import { forwardRef } from "react";
import WorkItem from "../components/WorkItem";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import gsap from "gsap";
//img
import storeBg from "../assets/ecom.webp";
import botBg from "../assets/bot.webp";
import makeBg from "../assets/makeBg.png";
//tech
import postgressql from "../assets/postgressql.svg";
import node from "../assets/node.svg";
import ex from "../assets/express.svg";
import discord from "../assets/discord.svg";
import react from "../assets/react.svg";
import openai from "../assets/openai.svg";
import css from "../assets/css.svg";
import make from "../assets/make.png";
import airtable from "../assets/airtable.svg";
import stripe from "../assets/stripe.png";
import apify from "../assets/apify.png";
import gsap_logo from "../assets/gsap.svg";
import js from "../assets/js.svg";

const Work = forwardRef((props, ref) => {
  useEffect(() => {
    gsap.to(".bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".work",
        start: "top bottom", // Start when .work hits bottom of viewport
        end: "bottom bottom", // End when .work is fully in view
        scrub: true,
      },
    });

    gsap.to(".videoDiv", {
      opacity: 0.1,
      display: "block",
      scrollTrigger: {
        trigger: ".contactsSection",
        start: "top 60%", // Start when hits bottom of viewport
        end: "bottom bottom", // End when is fully in view
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

  const botTech = [
    { name: "JavaScript", icon: js },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: ex },
    { name: "PostgreSQL", icon: postgressql },
    { name: "OpenAI", icon: openai },
    { name: "Discord.js", icon: discord },
  ];

  const ecomTech = [
    { name: "JavaScript", icon: js },
    { name: "React", icon: react },
    { name: "CSS", icon: css },
    { name: "GSAP", icon: gsap_logo },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: ex },
    { name: "PostgreSQL", icon: postgressql },
    { name: "Stripe", icon: stripe },
  ];

  const makeTech = [
    { name: "Make", icon: make },
    { name: "Apify", icon: apify },
    { name: "Airtable", icon: airtable },
  ];

  return (
    <div className="work" ref={ref}>
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Personal Projects</h1>
      </div>

      <WorkItem
        name="Discord OpenAI Bot"
        bg={botBg}
        link="https://github.com/reinisvaravs/portfolio/blob/main/WALLE.md"
        description="This is a smart Discord bot powered by Node.js and OpenAI. It reads documents from a GitHub repository and responds in real-time with contextual knowledge. The bot uses a Retrieval-Augmented Generation (RAG) pipeline to minimize OpenAI token consumption. Each user has their own memory, so conversations remain personal—even in shared channels. It is a closed-source project. Only the README.md is available below."
        tech={botTech}
      />
      <WorkItem
        name="Social Trend Tracker"
        bg={makeBg}
        link=""
        description="Social Media Trend Tracker is an automation built with Make.com that monitors post view counts from selected social accounts. It automatically logs top-performing videos into Airtable, making it easy to spot trends and track what content performs best over time. Ideal for content creators who want data-driven insight without manual work."
        tech={makeTech}
      />
      <WorkItem
        name="E-commerce Store"
        bg={storeBg}
        link="https://reinisvaravs.com/store"
        description="A full-stack e-commerce platform focused on backend architecture, featuring secure user registration, Stripe-powered subscription handling, and dynamic access control for premium course content. The frontend is kept clean and minimal using React for demonstration purposes."
        tech={ecomTech}
      />

      {/* CSS limit of 6 work items */}
    </div>
  );
});

export default Work;
