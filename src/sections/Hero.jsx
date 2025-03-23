import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const Hero = () => {
  const [animatedDate, setAnimatedDate] = useState("00");
  const [animatedMonth, setAnimatedMonth] = useState("jan");
  const heroRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    const date = now.getDate();
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    async function animateMonth() {
      for (let i = 0; i <= now.getMonth(); i++) {
        setAnimatedMonth(months[i]);

        const delay = Math.max(40, 200 - i * 15); // Slower at beginning of year
        await new Promise((res) => setTimeout(res, delay));
      }
    }

    async function animateDate() {
      let dateDelay;
      if (date <= 10) dateDelay = 100;
      else if (date <= 20) dateDelay = 60;
      else dateDelay = 40;

      for (let i = 1; i <= date; i++) {
        const formatted = i < 10 ? `0${i}` : `${i}`;
        setAnimatedDate(formatted);
        await new Promise((res) => setTimeout(res, dateDelay));
      }
    }

    animateMonth();
    animateDate();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heroAnim", {
        y: 100,
        duration: 0.4,
        rotation: "5deg",
        delay: 0.5,
      });
      gsap.from(".time", {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });
      gsap.from(".heroAbout", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="heroContent">
        <div className="time">
          <div>
            <p className="date">{animatedDate}</p>
          </div>
          <div className="dateMonth">
            <p className="month">{animatedMonth}</p>
            <p>available</p>
            <p>for work</p>
          </div>
        </div>
        <div className="fullStack">
          <p>full-stack</p>
        </div>
        <div className="web">
          <h1 className="heroAnim">WEB</h1>
        </div>
        <div className="developer">
          <h1 className="heroAnim">DEVELOPER</h1>
        </div>
        <div className="heroAbout">
          <p>
            I'm a full-stack web developer in Latvia, specializing in
            PostgreSQL, Express, React, and Node.js — also known as the PERN
            stack. I love designs that stand out. I love music, coffee and ai.
            Always curious. Always building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
