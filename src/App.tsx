import React from "react";
import About from "./components/About/About";
import ComputersCanvas from "./components/canvas/Computers";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Project from "./components/Project/Project";
import Skill from "./components/Skills/Skill";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <React.Fragment>
        <Nav />
        <Slider />
        <About />
        <Project />
        <Skill />
        <Contact />
        <Footer />
    </React.Fragment>
  );
}

export default App;
