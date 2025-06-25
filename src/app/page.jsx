"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // Dark mode from midnight (00:00) to 6 AM
      setIsNightMode(hour >= 0 && hour < 6);
    };

    // Check immediately
    checkTime();

    // Set up interval to check every minute
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }, []);

  useEffect(() => {
    gsap.to(".loadingCover", {
      opacity: 0,
      delay: 1.3,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className={`bg ${isNightMode ? "night-mode" : ""}`} />
      <div className="loadingCover" />
      <div className="appContent">
        <div className={`bg ${isNightMode ? "night-mode" : ""}`} />
        <Header
          onWorksClick={() =>
            workRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onAboutClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onContactClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Hero />
        <Work ref={workRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer
          onWorksClick={() =>
            workRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onAboutClick={() =>
            aboutRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          onContactClick={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </>
  );
}
