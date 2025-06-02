"use client";

import { forwardRef } from "react";
import WorkItem from "./WorkItem";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import gsap from "gsap";
import "../styles/work.css";
//img
import storeBg from "../../../public/assets/ecom.webp";
import botBg from "../../../public/assets/bot.webp";
import makeBg from "../../../public/assets/makeBg.webp";
import voiceAgent from "../../../public/assets/ai_voice_agent.png";
//tech
import postgressql from "../../../public/assets/postgressql.svg";
import node from "../../../public/assets/node.svg";
import ex from "../../../public/assets/express.svg";
import discord from "../../../public/assets/discord.svg";
import react from "../../../public/assets/react.svg";
import openai from "../../../public/assets/openai.svg";
import css from "../../../public/assets/css.svg";
import make from "../../../public/assets/make.svg";
import airtable from "../../../public/assets/airtable.svg";
import stripe from "../../../public/assets/stripe.svg";
import apify from "../../../public/assets/apify.svg";
import gsap_logo from "../../../public/assets/gsap.svg";
import js from "../../../public/assets/js.svg";
import retell from "../../../public/assets/retell.png";

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

  const agentTech = [
    { name: "Make", icon: make },
    { name: "Retell AI", icon: retell },
  ];

  return (
    <div className="work" ref={ref}>
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Selected Cases</h1>
      </div>

      <WorkItem
        name="AI Voice Agent"
        bg={voiceAgent}
        link=""
        linkText="Details coming soon..."
        description="A voice-based AI assistant built with Retell.ai and Make.com. It can call real phone numbers, talk naturally with humans, ask questions, take notes, and book meetings. Perfect for automating lead calls or client follow-ups. Feels like a human, but runs 24/7. Integrates with tools like CRMs and calendars. Ideal for sales teams looking to scale without losing the personal touch."
        tech={agentTech}
      />
      <WorkItem
        name="Discord OpenAI Bot"
        bg={botBg}
        link="https://github.com/reinisvaravs/WALL-E/blob/main/README.md"
        linkText={"Github"}
        description="A smart Discord bot built with Node.js and OpenAI. It reads GitHub docs and responds with contextual answers using a RAG pipeline to cut token use. Each user has memory for personalized replies. Like having a co-pilot that never logs off and knows all the docs by heart. Open-source - check out the README below."
        tech={botTech}
      />
      <WorkItem
        name="Auto IG Analytics"
        bg={makeBg}
        link="https://www.notion.so/Auto-Instagram-Analytics-1e2d7db7d9b9808d9215e77627be0d7d?pvs=4"
        linkText="Learn more"
        description={`Built an automated Instagram analytics system using <strong>Make</strong>, <strong>Apify</strong>, and <strong>Airtable</strong>.<br>
          The system scrapes profiles, posts, and reels daily into Airtable.<br>
          Useful for <strong>marketing agencies</strong>, <strong>talent managers</strong>, and <strong>brand teams</strong>.<br>
          Fully automated - no manual tracking needed.`}
        tech={makeTech}
      />
      <WorkItem
        name="E-commerce Store"
        bg={storeBg}
        link="https://reinisvaravs.com/store"
        linkText="reinisvaravs.com/store"
        description="A full-stack e-commerce platform with secure user registration, test-mode Stripe subscriptions, and dynamic access control for premium content. No real payments are processed. The React frontend is clean and minimal for demo purposes."
        tech={ecomTech}
      />

      {/* CSS limit of 6 work items */}
    </div>
  );
});

export default Work;
