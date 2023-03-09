/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactTypingEffect from 'react-typing-effect';
import './animation.css';
import scroll from '../../js/scroll.js'

const Slider: React.FC = () => {

  console.log(scroll)

  return (
    <section className="gardient relative w-full h-screen bg-dark-grey flex flex-col items-center justify-center text-white">
      <div className="text-lg">Passionate / Youth / Desireable</div>
      <div className="text-7xl my-7"><ReactTypingEffect text={["PHAM NGOC TAN"]} speed={100}/></div>
      <div className="gap-10 grid grid-flow-col ">
        <a href="https://github.com/tan-developer" target="_blank" rel="noreferrer">
          <i className="fab fa-github  fa-3x socialicons hover:text-blue-500 transition-all" ></i>
        </a>
        <a href="https://www.facebook.com/errorsyntax" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook  fa-3x socialicons hover:text-blue-500 transition-all"></i>
        </a>
        <a href="https://www.instagram.com/tan.nthing" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram    fa-3x socialicons hover:text-blue-500 transition-all"></i>
        </a>
        <a href="https://www.linkedin.com/in/tan-pham-ngoc-9a54a6257/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin  fa-3x socialicons hover:text-blue-500 transition-all"></i>
        </a>
      </div>

      <div className="cursor-pointer absolute bottom-5 text-2xl"><i onClick={() => scroll(window.innerHeight)} className="fa-sharp fa-solid fa-arrow-down"></i></div>
    </section>
  );
};

export default Slider;
