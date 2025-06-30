"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/hero.css";

const Hero = () => {
  const [animatedDate, setAnimatedDate] = useState("00");
  const [animatedMonth, setAnimatedMonth] = useState("jan");
  const heroRef = useRef(null);

  const themeBg = 6 > new Date().getHours();

  useEffect(() => {
    const now = new Date();
    const date = now.getDate();
    const monthIndex = now.getMonth();
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

    async function animateDateAndMonth() {
      const dateStr = date < 10 ? `0${date}` : `${date}`;
      const firstDigit = Number(dateStr[0]); // "2"
      const secondDigit = Number(dateStr[1]); // "3"

      // Count up to first digit
      for (let i = 0; i <= firstDigit; i++) {
        setAnimatedDate(`${i}0`); // e.g. "00", "10", "20"
        await new Promise((res) => setTimeout(res, 150));
      }

      // Count up second digit
      for (let j = 0; j <= secondDigit; j++) {
        setAnimatedDate(`${firstDigit}${j}`); // e.g. "21", "22", "23"
        await new Promise((res) => setTimeout(res, 100));
      }

      // Animate month (letter-by-letter like before)
      for (let i = 0; i <= monthIndex; i++) {
        setAnimatedMonth(months[i]);
        await new Promise((res) => setTimeout(res, 50));
      }
    }

    setTimeout(() => {
      animateDateAndMonth();
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".heroAnim", {
        y: 0,
        rotation: "0deg",
        opacity: 1,
        duration: 0.4,
        delay: 0.7,
      });
      gsap.to(".time", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      });
      gsap.to(".heroAbout", {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <div className={`bg ${themeBg ? "nightBg" : ""}`} />;
      <div className="hero">
        <div className="heroContent" ref={heroRef}>
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
            <p>AI</p>
          </div>
          <div className="software">
            <h1 className="heroAnim">AUTOMATION</h1>
          </div>
          <div className="developer">
            <h1 className="heroAnim">ENGINEER</h1>
          </div>
          <div className="heroAbout">
            <p>
              AI Automation Engineer from Latvia. I build smart systems with
              code and no-code tools to streamline operations and eliminate
              manual overhead.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
