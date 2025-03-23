import { forwardRef } from "react";
import WorkItem from "../components/WorkItem";
import storeBg from "../assets/store.jpg";
import appBg from "../assets/app.jpg";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import gsap from "gsap";

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

  return (
    <div className="work" ref={ref}>
      <div className="selectedCasesDiv">
        <CgWebsite className="workIcon" />
        <h1 className="selectedCases">Selected Cases</h1>
      </div>

      <WorkItem
        name="E-commerce Store"
        bg={storeBg}
        link="https://reinisvaravs.com/store"
      />
      <WorkItem
        name="Todo App"
        bg={appBg}
        link="https://reinisvaravs.com/app"
      />

      {/* CSS limit of 6 work items */}
    </div>
  );
});

export default Work;
