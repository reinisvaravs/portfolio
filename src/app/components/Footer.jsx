"use client";
import "../styles/footer.css";
import { useEffect } from "react";

function Footer({ onWorksClick, onAboutClick, onContactClick }) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      const btns = document.querySelectorAll(".btns");
      const isSmallScreen = window.innerWidth <= 900;

      btns.forEach((btn) => {
        btn.classList.toggle("throughWhite", !isSmallScreen);
      });
    };

    // Initial check
    handleResize();

    // Listen to resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer>
      <div className="authorDiv">
        <p className="author">
          <span>{currentYear}</span> Reinis Varavs
        </p>
      </div>
      <div className="footerButtons">
        <ul>
          <li>
            <button className="btns throughWhite" onClick={onWorksClick}>
              works |
            </button>
          </li>
          <li>
            <button className="btns throughWhite" onClick={onAboutClick}>
              about |
            </button>
          </li>
          <li>
            <button className="btns throughWhite" onClick={onContactClick}>
              contact
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
