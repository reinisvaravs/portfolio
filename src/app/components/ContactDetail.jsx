"use client";
import "../styles/contacts.css";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export function ContactDetail({ href, detailContent, detailType }) {
  const [isCopied, setIsCopied] = useState(false);
  const detailRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(detailRef.current, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: detailRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, detailRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <p className="detail detailAnim" ref={detailRef}>
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
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(iconRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, iconRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <a
      className="contactIconDiv"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="contactIcon" ref={iconRef} src={icon} />
      <p>{name}</p>
    </a>
  );
}
