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

gsap.registerPlugin(ScrollTrigger);

const VITE_API_BASE_URL = "https://backend-ecom-gbzk.onrender.com";
const VITE_API_BASE_URL_PADLET = "https://friends-2v7s.onrender.com";

function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const pingBackend = async (retries = 3, delay = 5000) => {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const res = await fetch(`${VITE_API_BASE_URL}/api/ping`);
          if (res.ok) {
            console.log("E-Commerce Store Backend is awake");
            return;
          }
        } catch (error) {
          console.warn(`Ping attempt ${attempt} failed.`);
          if (attempt < retries) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }

      console.error(
        "Failed to wake E-Commerce Store backend after multiple attempts."
      );
    };

    pingBackend();
  }, []);

  useEffect(() => {
    const pingBackend = async (retries = 3, delay = 5000) => {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const res = await fetch(`${VITE_API_BASE_URL_PADLET}/api/ping`);
          if (res.ok) {
            console.log("Todo App Backend is awake");
            return;
          }
        } catch (error) {
          console.warn(`Ping attempt ${attempt} failed.`);
          if (attempt < retries) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }

      console.error("Failed to wake Todo App backend after multiple attempts.");
    };

    pingBackend();
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
      window.scrollTo({ top: 0 });
    }, 0);
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
