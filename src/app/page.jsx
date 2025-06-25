"use client"

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
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ slug }) {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      if (slug === "day") {
        setIsNightMode(false);
      } else if (slug === "night") {
        setIsNightMode(true);
      } else {
        const hour = new Date().getHours();
        setIsNightMode(hour >= 0 && hour < 6);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, [slug]);

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
    gsap.to(".loadingCover", {
      opacity: 0,
      delay: 1.3,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className={`bg ${isNightMode ? "nightBg" : "dayBg"}`} />
      <div className="loadingCover" />
      <div className="appContent">
        <div className={`bg ${isNightMode ? "nightBg" : "dayBg"}`} />
        <Header />
        <Hero />
        <Work />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </>
  );
}
