"use client";
import { useEffect } from "react";
import gsap from "gsap";

function LoadingCover() {
  useEffect(() => {
    gsap.to(".loadingCover", {
      opacity: 0,
      delay: 1.3,
      duration: 1,
    });
  }, []);

  return <div className="loadingCover"></div>;
}

export default LoadingCover;
