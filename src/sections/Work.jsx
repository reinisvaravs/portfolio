import { forwardRef } from "react";
import WorkItem from "../components/WorkItem";
import storeBg from "../assets/store.jpg";
import appBg from "../assets/app.jpg";
import { CgWebsite } from "react-icons/cg";

const Work = forwardRef((props, ref) => {
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
