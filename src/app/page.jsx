"use client"

import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import LoadingCover from "./components/LoadingCover";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ slug }) {
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

  

  return (
    <>
      <div className={`bg ${isNightMode ? "nightBg" : "dayBg"}`} />
      <LoadingCover/>
      <div className="appContent">
        <div className={`bg ${isNightMode ? "nightBg" : "dayBg"}`} />
        <Header />
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
