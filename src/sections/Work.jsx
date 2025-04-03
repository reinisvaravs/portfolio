import { forwardRef } from "react";
import WorkItem from "../components/WorkItem";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import gsap from "gsap";
//img
import storeBg from "../assets/ecom.png";
import botBg from "../assets/bot.png";
//tech
import postgressql from "../assets/postgressql.svg";
import node from "../assets/node.svg";
import ex from "../assets/express.svg";
import discord from "../assets/discord.svg";
import react from "../assets/react.svg";
import stripe from "../assets/stripe.svg";
import openai from "../assets/openai.svg";

const Work = forwardRef((props, ref) => {
  useEffect(() => {
    gsap.to(".bg", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".work", // Make sure this exists
        start: "top bottom", // Start when .work hits bottom of viewport
        end: "bottom bottom", // End when .work is fully in view
        scrub: 2, // Makes it smooth
        toggleActions: "play none none reverse",
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

  const botTech = [postgressql, node, ex, openai, discord];
  const ecomTech = [postgressql, ex, react, node, stripe];

  return (
    <div className="work" ref={ref}>
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Selected Cases</h1>
      </div>

      <WorkItem
        name="Discord OpenAI Bot"
        bg={botBg}
        link="https://github.com/reinisvaravs/discord-openai-bot/blob/main/README.md"
        description="WALL-E is a smart Discord bot powered by Node.js and OpenAI. It implements a RAG (Retrieval-Augmented Generation) pipeline that compares embedded message vectors with a chunked vector database, retrieving only relevant context to minimize OpenAI token consumption."
        tech={botTech}
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
