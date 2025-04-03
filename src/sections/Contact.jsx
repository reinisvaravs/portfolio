import { useEffect, useRef } from "react";
import { ContactDetail, IconDetail } from "../components/ContactDetail";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { forwardRef } from "react";
import instagram from "../assets/instagram.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.png";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  const contactRef = useRef(null);

  const combinedRef = (el) => {
    contactRef.current = el;
    ref.current = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const details = gsap.utils.toArray(".detail");
      const socialMedia = gsap.utils.toArray(".socialMedia");
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
      socialMedia.forEach((el, i) => {
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
    }, contactRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const btns = document.querySelectorAll(".detail");
      const isSmallScreen = window.innerWidth <= 900;

      btns.forEach((btn) => {
        btn.classList.toggle("detailAnim", !isSmallScreen);
      });
    };

    // Initial check
    handleResize();

    // Listen to resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="contactsSection" ref={combinedRef}>
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
        <p className="subHeading">
          Feel free to reach out! I'm easiest to reach by phone, but you can
          also connect with me on Instagram or send me an email.
        </p>
        <div className="emailDiv">
          <ContactDetail
            href="tel:+371 28816633"
            detailContent="+371 28816633"
            detailType="phone"
          />
          <ContactDetail
            href="mailto:reinisroberts.varavs2@gmail.com"
            detailContent="reinisroberts.varavs2@gmail.com"
            detailType="email"
          />
          <div className="IconDetailDiv">
            <IconDetail
              href="https://www.instagram.com/reinisrvaravs/"
              icon={<img className="socialMedia" src={instagram} />}
            />
            <IconDetail
              href="https://github.com/reinisvaravs/"
              icon={<img className="socialMedia" src={github} />}
            />
            <IconDetail
              href="https://www.linkedin.com/in/reinis-varavs/"
              icon={<img className="socialMedia" src={linkedin} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
