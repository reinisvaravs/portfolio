import { useEffect, useRef } from "react";
import ContactDetail from "../components/ContactDetail";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(".detail");
      details.forEach((el, i) => {
        gsap.from(el, {
          x: -600,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef); // 👈 this scope is important!

    return () => ctx.revert(); // 👈 cleanup on unmount
  }, []);

  return (
    <section className="contactsSection" ref={containerRef}>
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
        <p className="subHeading">
          Get in touch with me via social media or text me.
        </p>
        <div className="emailDiv">
          <ContactDetail
            href="tel:+371 28816633"
            detailContent="+371 28816633"
            detailType="phone"
          />
          <ContactDetail
            href="https://www.instagram.com/reinisrvaravs/"
            detailContent="@reinisrvaravs"
            detailType="instagram"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
