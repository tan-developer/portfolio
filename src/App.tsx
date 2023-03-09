import React from "react";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <React.Fragment>
            <Nav />
            <Slider />
            <About />
    </React.Fragment>
  );
}

export default App;
