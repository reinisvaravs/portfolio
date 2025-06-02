import { FaGithub } from "react-icons/fa";
import { closePopup } from "./openPopup";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function PopupContent({
  name,
  description,
  link,
  linkText,
  tech,
}) {
  return (
    <div className="popupContent">
      <div className="backDiv">
        <FiArrowLeftCircle onClick={closePopup} className="backBtn" />
      </div>
      <h1 className="popupHeading">{name}</h1>
      <p
        className="popupParagraph"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="popupLink">
        {tech.map((icon, index) => (
          <div key={index} className="projectTechDiv">
            <img
              src={icon.icon}
              className="projectTechIcon"
              alt={`Tech ${icon.icon}`}
            />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
      <div className="popupLink">
        {linkText === "Github" ? (
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
        ) : link ? (
          <div className="githubLinkDiv">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="httpsLink"
            >
              {linkText}
            </a>
          </div>
        ) : linkText ? (
          <div className="githubLinkDiv">
            <p>{linkText}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
