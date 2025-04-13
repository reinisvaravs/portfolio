import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import videoBg from "./assets/matrixBg.mp4";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

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
    }, 200); // 100ms delay should be enough for the layout to settle
  }, []);

  useEffect(() => {
    gsap.to(".loadingCover", {
      opacity: 0,
      delay: 1.3,
      duration: 1,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true); // Only show video when in view
          observer.disconnect(); // Optional: stop observing
        }
      },
      {
        rootMargin: "200px", // Load slightly before it's fully visible
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg" />
      <div className="loadingCover" />
      <div className="videoDiv" ref={videoRef}>
        {showVideo && (
          <video
            src={videoBg}
            className="video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        )}
      </div>
      <div className="appContent">
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

export default App;
