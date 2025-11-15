import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Skills from "./Components/skills/skills"
import Projects from "./Components/Projects/project"
import Services from "./Components/Services/service"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration for all animations
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Services/>
      <Footer />
    </>
  );
}

export default App;
