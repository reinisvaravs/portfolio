import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useRef } from "react";
import "./App.css";

function App() {
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        onWorksClick={() =>
          workRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onContactClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Hero />
      <Work ref={workRef} />
      <Contact ref={contactRef} />
      <Footer
        onWorksClick={() =>
          workRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onContactClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </>
  );
}

export default App;
