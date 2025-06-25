import "../styles/contacts.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export function ContactDetail({ href, detailContent, detailType }) {
  const [isCopied, setIsCopied] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const details = gsap.utils.toArray(".detailAnim");
    details.forEach((el, i) => {
      gsap.from(el, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
    const socialMedia = gsap.utils.toArray(".contactIcon");
    socialMedia.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

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
