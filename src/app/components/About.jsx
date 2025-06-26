import "../styles/about.css";
// icons
import AboutText from "./AboutText";
import Tech from "./Tech";

const About = () => {
  return (
    <>
      <h1 className="techGridH1">Tech stack</h1>
      <div className="techGridContainer">
        <div className="techGroup">
          <h2 className="techGridH2">Frontend</h2>
          <Tech category="frontend" />
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">Backend</h2>
          <Tech category="backend" />
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">APIs & Integrations</h2>
          <Tech category="api" />
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">No-code</h2>
          <Tech category="make" />
        </div>
      </div>
      <AboutText />
    </>
  );
};

export default About;
