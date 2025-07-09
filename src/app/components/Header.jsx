"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../styles/header.css";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        duration: 0.5,
        delay: 1.7,
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            handleScroll();
          }, 500);
        },
      });
    }, headerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  useEffect(() => {
    gsap.to("header", {
      backdropFilter: "blur(5px)",
      scrollTrigger: {
        trigger: "body",
        start: "5% top",
        end: "30% top",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.querySelector(".progressBar");
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = (section) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: section, offsetY: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <header ref={headerRef}>
      <div className="progressBarDiv">
        <div className="progressBar" />
      </div>
      <div className="name">
        <p>Reinis Varavs</p>
        <p className="headerProf">AI Automation Engineer</p>
      </div>
      <nav>
        <ul>
          <li>
            <button className="navBtns" onClick={() => scrollToWork(".work")}>
              works
            </button>
          </li>
          <li>
            <button className="navBtns ignoreBtns">|</button>
          </li>
          <li>
            <button
              className="navBtns"
              onClick={() => scrollToWork(".aboutSection")}
            >
              about
            </button>
          </li>
          <li>
            <button className="navBtns ignoreBtns">|</button>
          </li>
          <li>
            <button
              className="navBtns"
              onClick={() => scrollToWork(".contactsSection")}
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
