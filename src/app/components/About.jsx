import "../styles/about.css";
import AboutText from "./AboutText";
import Tech from "./Tech";

const About = () => {
  return (
    <>
      <h1 className="techGridH1">Main Tech Stack</h1>
      <div className="techGridContainer">
        <div className="techGroup">
          <h2 className="techGridH2">Frontend</h2>
          <Tech category="frontend" />
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">Backend</h2>
          <Tech category="backend" />
        </div>
      </div>
    </>
  );
};

export default About;
