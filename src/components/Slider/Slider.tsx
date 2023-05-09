/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTypingEffect from "react-typing-effect";
import "./animation.css";
import scroll from "../../js/scroll.js";
import { useCallback, useState, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

const Slider: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    console.log(window.innerWidth)
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  });

  return (
    <section className="gardient overflow-y-hidden relative w-full h-screen bg-dark-grey flex flex-col items-center justify-center text-white">
      <div className="text-lg z-10">Passionate / Youth / Desireable</div>
      <div className="md:text-7xl text-3xl my-7 z-10">
        <ReactTypingEffect
          text={["PHAM NGOC TAN", "FRONT-END DEVELOPER"]}
          speed={80}
        />
      </div>
      <div className="gap-10 grid grid-flow-col z-10">
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

      <div className="cursor-pointer absolute bottom-5 text-2xl z-10">
        <i
          onClick={() => scroll("About")}
          className="fa-sharp fa-solid fa-arrow-down"
        ></i>
      </div>

      <div className="mt-10 z-10">
        <a
          className="border-2 py-3 px-5 hover:bg-white hover:text-dark-grey transition-all"
          href="https://www.topcv.vn/xem-cv/AgdTCQ9QCAkKDAMBUwBYV1IDUg4EWgMHA1cEWw9f6c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            opacity: ".5",
            position: "absolute",
            zIndex: "-1",
          },
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 200,
                duration: 10,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 2000,
              },
              value: !isMobile && isMobile != undefined ? 70 : 15,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </section>
  );
};

export default Slider;
