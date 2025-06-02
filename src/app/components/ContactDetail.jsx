import "../styles/contacts.css";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

export function ContactDetail({ href, detailContent, detailType }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <p className="detail detailAnim">
      {detailType}:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {detailContent}
      </a>
      <button
        onClick={() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
          navigator.clipboard.writeText(detailContent);
        }}
      >
        {!isCopied && <MdContentCopy className="clipboard" />}
        {isCopied && <FaCheck className="check" />}
      </button>
    </p>
  );
}

export function IconDetail({ href, icon, name }) {
  return (
    <a
      className="contactIconDiv"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="contactIcon" src={icon} />
      <p>{name}</p>
    </a>
  );
}
