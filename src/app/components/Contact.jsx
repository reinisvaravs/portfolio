"use client";
import "../styles/contacts.css";

import { useEffect, useRef } from "react";
import { ContactDetail, IconDetail } from "../components/ContactDetail";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  const contactRef = useRef(null);

  const combinedRef = (el) => {
    contactRef.current = el;
    ref.current = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(".detailAnim");
      details.forEach((el, i) => {
        gsap.from(el, {
          x: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
      const socialMedia = gsap.utils.toArray(".contactIcon");
      socialMedia.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contactsSection" ref={combinedRef}>
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
        <p className="subHeading">
          Feel free to reach out! Text, DM or send me an email.
        </p>
        <div className="emailDiv">
          <ContactDetail
            href="tel:+371 28816633"
            detailContent="+371 28816633"
            detailType="phone"
          />
          <ContactDetail
            href="mailto:rr.varavs@gmail.com"
            detailContent="rr.varavs@gmail.com"
            detailType="email"
          />
          <div className="IconDetailDiv">
            <IconDetail
              href="https://www.instagram.com/reinisvaravs/"
              icon="/assets/instagram.webp"
              name="Instagram"
            />
            <IconDetail
              href="https://github.com/reinisvaravs/"
              icon="/assets/github.svg"
              name="Github"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
