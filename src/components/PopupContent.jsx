import { FaGithub } from "react-icons/fa";
import postgressql from "../assets/postgressql.svg";
import node from "../assets/node.svg";
import ex from "../assets/express.svg";
import javascript from "../assets/javascript.svg";
import discord from "../assets/discord.svg";
import { closePopup } from "../utils/openPopup";

export default function PopupContent({ name, description, link }) {
  return (
    <div className="popupContent">
      <button onClick={closePopup}>Back</button>
      <h1 className="popupHeading">{name}</h1>

      <p className="popupParagraph">{description}</p>
      <div className="popupLink">
        <img src={postgressql} className="linkIcon" />
        <img src={node} className="linkIcon" />
        <img src={ex} className="linkIcon" />
        <img src={javascript} className="linkIcon" />
        <img src={discord} className="linkIcon" />
      </div>
      <div className="popupLink">
        <a href={link} target="_blank" rel="noreferrer">
          <FaGithub className="linkIcon" />
        </a>
      </div>
    </div>
  );
}
