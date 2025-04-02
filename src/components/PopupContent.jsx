import { FaGithub } from "react-icons/fa";

import { closePopup } from "../utils/openPopup";

export default function PopupContent({ name, description, link, tech }) {
  return (
    <div className="popupContent">
      <button onClick={closePopup}>Back</button>
      <h1 className="popupHeading">{name}</h1>

      <p className="popupParagraph">{description}</p>
      <div className="popupLink">
        {tech.map((icon, index) => (
          <img
            key={index}
            src={icon}
            className="linkIcon"
            alt={`Tech ${icon}`}
          />
        ))}
      </div>
      <div className="popupLink">
        <a href={link} target="_blank" rel="noreferrer">
          <FaGithub className="linkIcon" />
        </a>
      </div>
    </div>
  );
}
