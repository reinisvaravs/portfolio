import "../styles/work.css";
import WorkItem from "./WorkItem";
import { CgWebsite } from "react-icons/cg";
import { techStacks } from "../config/techIcons";

const Work = () => {
  return (
    <div className="work">
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Latest Projects</h1>
      </div>
      <WorkItem
        name="AI WhatsApp Chatbot"
        bg="/images/setinbound.webp"
        link=""
        linkText="No documentation"
        description="The AI WhatsApp chabot responds to every message within 10s, sounds human, and handles appointment scheduling or questions independently. You can feed it docs, so it always has the answers by searching the docs using SQL queries or RAG. You can prompt what it should say and what to ask, so it can collect any details you need from leads and save them for you in a CRM, and then also book appointments directly into your calendar. This is useful for any business with lots of leads they don't want to miss or want to respond to instantly after the lead comes in from an ad. It also supports audio messages."
        tech={techStacks.chatbot}
      />
      <WorkItem
        name="AI Voice Call Agent"
        bg="/images/setinbound.webp"
        link=""
        linkText="No documentation"
        description="The AI agent picks up every call, sounds human, and handles appointment scheduling or questions independently. You can feed it docs or websites, so it always has the answers. You can prompt what it should say and what to ask, so it can collect any details you need from callers and save them for you in a CRM, and then also book appointments directly into your calendar. This is useful for any business with lots of customer calls they don't want to miss."
        tech={techStacks.agent}
      />
      <WorkItem
        name="RAG OpenAI Bot"
        bg="/images/bot.webp"
        link="https://github.com/reinisvaravs/WALL-E/blob/main/README.md"
        linkText={"Github"}
        description="Made a smart Discord bot built with Node.js and OpenAI API. It reads GitHub docs and responds with contextual answers using a RAG system to cut token use. Each user has memory for personalized replies. Like having a co-pilot that never logs off and knows all the docs by heart. It's in Discord, so check out the GitHub README.md below (it's open-source). Sold this for 100€."
        tech={techStacks.bot}
      />
      <WorkItem
        name="Auto IG Analytics"
        bg="/images/makeBg.webp"
        link="https://www.notion.so/Auto-Instagram-Analytics-1e2d7db7d9b9808d9215e77627be0d7d?pvs=4"
        linkText="Learn more"
        description="This is an automated Instagram analytics system using Make, Apify, and Airtable. The system scrapes profiles, posts, and reels daily into Airtable. Useful for marketing agencies, talent managers, and brand teams. Fully automated - no manual tracking needed. It tracks daily growth and every other aspect of the profile and posts. Sold this for 500€."
        tech={techStacks.make}
      />
      {/* CSS limit of 6 work items */}
    </div>
  );
};

export default Work;
