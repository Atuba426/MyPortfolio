import "./home.css";
import Typed from "typed.js";

import React, { useEffect, useRef } from "react";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "MERN Stack Developer",
        "frontend developer",
        "backend developer",
        "Freelancer",
      ],
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1500,
      loop: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <div className="landing-page">
        <p className="title-text">
          Hi there 🙌 I'm a <span className="highlight" ref={el}></span>
        </p>
      </div>
    </>
  );
}
