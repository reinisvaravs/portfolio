"use client";

import { useEffect, useRef } from "react";
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
      <div className="bg" />
      <div className="loadingCover" />
      <div className="videoDiv">
        <video className="video" autoPlay loop muted playsInline preload="auto">
          <source src="/assets/matrixBg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="appContent">
        <div className="bg" />
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
