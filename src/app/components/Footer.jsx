"use client";

import { useEffect } from "react";
import gsap from "gsap";
import "../styles/footer.css";

function Footer({ onWorksClick, onAboutClick, onContactClick }) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.from("footer", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom", // Starts when hits bottom of viewport
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <footer>
      <div className="authorDiv">
        <p className="author">{currentYear} Reinis Varavs</p>
      </div>
      <div className="footerButtons">
        <ul>
          <li>
            <button className="navBtns" onClick={onWorksClick}>
              works
            </button>
          </li>
          <li>
            <button className="navBtns ignoreBtns">|</button>
          </li>
          <li>
            <button className="navBtns" onClick={onAboutClick}>
              about
            </button>
          </li>
          <li>
            <button className="navBtns ignoreBtns">|</button>
          </li>
          <li>
            <button className="navBtns" onClick={onContactClick}>
              contact
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
