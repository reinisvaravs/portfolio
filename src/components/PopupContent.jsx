import { FaGithub } from "react-icons/fa";
import { closePopup } from "../utils/openPopup";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function PopupContent({ name, description, link, tech }) {
  return (
    <div className="popupContent">
      <div className="backDiv">
        <FiArrowLeftCircle onClick={closePopup} className="backBtn" />
      </div>
      <h1 className="popupHeading">{name}</h1>

      <p className="popupParagraph">{description}</p>
      <div className="popupLink">
        {tech.map((icon, index) => (
          <div key={index} className="projectTechDiv">
            <img src={icon.icon} className="projectTechIcon" alt={`Tech ${icon.icon}`} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
      <div className="popupLink">
        {name === "Discord OpenAI Bot" ? (
          <div className="githubLinkDiv">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="githubLink"
            >
              <FaGithub className="linkIcon" />
              <p>Github</p>
            </a>
          </div>
        ) : (
          <a href={link} target="_blank" rel="noreferrer" className="httpsLink">
            {link.replace(/^https?:\/\//, "")}
          </a>
        )}
      </div>
    </div>
  );
}
