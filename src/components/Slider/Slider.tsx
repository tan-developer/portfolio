/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTypingEffect from "react-typing-effect";
import "./animation.css";
import scroll from "../../js/scroll.js";
import React from "react";

const Slider: React.FC = () => {
  return (
      <section
        className="pt-20 gardient overflow-y-hidden relative w-full h-screen bg-dark-grey flex flex-col items-center justify-center text-white"
      >

        <div className="text-lg">Passionate / Youth / Desireable</div>
        <div className="md:text-7xl text-3xl my-7">
          <ReactTypingEffect
            text={["PHAM NGOC TAN", "FRONT-END DEVELOPER"]}
            speed={80}
          />
        </div>
        <div className="gap-10 grid grid-flow-col ">
          <a
            href="https://github.com/tan-developer"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github  fa-3x socialicons hover:text-blue-500 transition-all"></i>
          </a>
          <a
            href="https://www.facebook.com/errorsyntax"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook  fa-3x socialicons hover:text-blue-500 transition-all"></i>
          </a>
          <a
            href="https://www.instagram.com/tan.nthing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram    fa-3x socialicons hover:text-blue-500 transition-all"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tan-pham-ngoc-9a54a6257/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin  fa-3x socialicons hover:text-blue-500 transition-all"></i>
          </a>
        </div>

        <div className="cursor-pointer absolute bottom-5 text-2xl">
          <i
            onClick={() => scroll("About")}
            className="fa-sharp fa-solid fa-arrow-down"
          ></i>
        </div>

        <div className="mt-10">
          <a
            className="border-2 py-3 px-5 hover:bg-white hover:text-dark-grey transition-all"
            href="https://www.topcv.vn/xem-cv/AgdTCQ9QCAkKDAMBUwBYV1IDUg4EWgMHA1cEWw9f6c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
  );
};

export default Slider;
