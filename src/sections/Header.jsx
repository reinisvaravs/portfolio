import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Header({ onWorksClick, onContactClick }) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        duration: 0.5,
        delay: 0.5,
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

  return (
    <header ref={headerRef}>
      <div className="name">
        <p>Reinis Vāravs</p>
        <p className="headerProf">Full stack web Developer</p>
      </div>
      <nav>
        <ul>
          <li>
            <button className="throughWhite" onClick={onWorksClick}>
              works,
            </button>
          </li>
          <li>
            <button className="throughWhite" onClick={onContactClick}>
              contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
