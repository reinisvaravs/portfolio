import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect, useRef } from "react";
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
        <video
          src={videoBg}
          className="video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
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
