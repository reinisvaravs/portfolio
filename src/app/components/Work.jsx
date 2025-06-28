import "../styles/work.css";
import WorkItem from "./WorkItem";
import { CgWebsite } from "react-icons/cg";
import { techStacks } from "../config/techIcons";

const Work = () => {
  return (
    <div className="work">
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Selected Cases</h1>
      </div>

      <WorkItem
        name="AI Receptionist"
        bg="/assets/ai_voice_agent.png"
        link="https://setinbound.com"
        linkText="setinbound.com"
        description="SetInbound delivers a 24/7 AI-powered voice receptionist that answers and books leads in under 60 seconds. Stop losing money to missed calls or overwhelmed staff. Our AI sounds human, handles scheduling, and syncs with your CRM - no training, no burnout, no missed opportunities. Perfect for appointment-based businesses that want to convert more leads and scale without adding payroll. Try the demo on our site."
        tech={techStacks.agent}
      />

      <WorkItem
        name="Discord OpenAI Bot"
        bg="/assets/bot.webp"
        link="https://github.com/reinisvaravs/WALL-E/blob/main/README.md"
        linkText={"Github"}
        description="A smart Discord bot built with Node.js and OpenAI. It reads GitHub docs and responds with contextual answers using a RAG pipeline to cut token use. Each user has memory for personalized replies. Like having a co-pilot that never logs off and knows all the docs by heart. Open-source - check out the README below."
        tech={techStacks.bot}
      />
      <WorkItem
        name="Auto IG Analytics"
        bg="/assets/makeBg.webp"
        link="https://www.notion.so/Auto-Instagram-Analytics-1e2d7db7d9b9808d9215e77627be0d7d?pvs=4"
        linkText="Learn more"
        description={`Built an automated Instagram analytics system using <strong>Make</strong>, <strong>Apify</strong>, and <strong>Airtable</strong>.<br>
          The system scrapes profiles, posts, and reels daily into Airtable.<br>
          Useful for <strong>marketing agencies</strong>, <strong>talent managers</strong>, and <strong>brand teams</strong>.<br>
          Fully automated - no manual tracking needed.`}
        tech={techStacks.make}
      />
      <WorkItem
        name="E-commerce Store"
        bg="/assets/ecom.webp"
        link="https://frontend-ecom-r8j6.onrender.com"
        linkText="frontend-ecom-r8j6.onrender.com"
        description="A full-stack e-commerce platform with secure user registration, test-mode Stripe subscriptions, and dynamic access control for premium content. No real payments are processed. The React frontend is clean and minimal for demo purposes."
        tech={techStacks.ecom}
      />

      {/* CSS limit of 6 work items */}
    </div>
  );
};

export default Work;
