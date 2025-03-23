import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WorkItem({ name, bg, link }) {
  const itemRef = useRef(null);
  const textRef = useRef(null);

  const handleOpen = () => {
    window.open(`${link}`, "_blank");
  };

  useEffect(() => {
    const item = itemRef.current;
    const img = item.querySelector(".workImg");

    gsap.set(img, {
      backgroundSize: "120%",
      backgroundPosition: "center",
    });

    const handleMouseOver = () => {
      gsap.to(img, {
        backgroundSize: "145%",
        backgroundPosition: "center",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(item, {
        scale: 0.93,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    const handleMouseOut = () => {
      gsap.to(img, {
        backgroundSize: "120%",
        backgroundPosition: "center",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(item, {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    item.addEventListener("mouseover", handleMouseOver);
    item.addEventListener("mouseout", handleMouseOut);

    // Cleanup
    return () => {
      item.removeEventListener("mouseover", handleMouseOver);
      item.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const img = itemRef.current.querySelector(".workImg");
      gsap.from(img, {
        duration: 0.5,
        y: 200,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, itemRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    gsap.from(".nameAnim", {
      // opacity: 0,
      rotate: "5deg",
      y: 100,
    });
    gsap.to(".nameAnim", {
      opacity: 1,
      rotate: "0deg",
      y: 0,
      scrollTrigger: {
        trigger: ".nameAnim",
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="workItem" onClick={() => handleOpen()}>
      <div className="workImgDiv" ref={itemRef}>
        <div
          className="workWebsite workImg"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="ontopDiv">
          <h1 onClick={() => handleOpen()}>{name}</h1>
        </div>
      </div>
      <div className="workTextDiv">
        <h1 className="nameAnim" onClick={() => handleOpen()}>
          {name}
        </h1>
      </div>
    </div>
  );
}

export default WorkItem;
