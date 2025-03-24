import { forwardRef } from "react";
import WorkItem from "../components/WorkItem";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import gsap from "gsap";

import storeBg from "../assets/ecom.jpg";
import appBg from "../assets/app.jpg";
import botBg from "../assets/walle.webp";

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

  return (
    <div className="work" ref={ref}>
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Selected Cases</h1>
      </div>

      <WorkItem
        name="Discord OpenAI Bot"
        bg={botBg}
        link="https://discord.gg/FSNvh4XtVS"
      />
      <WorkItem
        name="E-commerce Store"
        bg={storeBg}
        link="https://reinisvaravs.com/store"
      />
      <WorkItem
        name="To-do App"
        bg={appBg}
        link="https://reinisvaravs.com/app"
      />

      {/* CSS limit of 6 work items */}
    </div>
  );
});

export default Work;
