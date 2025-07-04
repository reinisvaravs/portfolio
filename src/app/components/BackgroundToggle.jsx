"use client";

import { useEffect } from "react";

const BackgroundToggle = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if 'b' or 'B' is pressed
      if (event.key.toLowerCase() === "b") {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          const bgElement = document.querySelector(".bg");
          if (bgElement) {
            const currentBg =
              bgElement.style.backgroundImage ||
              getComputedStyle(bgElement).backgroundImage;

            // Toggle between porsche_low.webp and porsche_original.jpg
            if (currentBg.includes("porsche_low.webp")) {
              bgElement.style.backgroundImage =
                'url("/images/porsche_original.jpg")';
            } else {
              bgElement.style.backgroundImage =
                'url("/images/porsche_low.webp")';
            }
          }
        }, 100);
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BackgroundToggle;
