import { useRef } from "react";

const About: React.FC = () => {
  return (
    <section className="container w-screen xl:h-60vh grid xl:grid-cols-3 m-auto content-center grid-cols-1 p-10">
      <div className="md:min-w-min flex justify-center">
        <img
          className="rounded-full object-contain h-full"
          src="assets/potrait.jpg"
          alt=""
        />
      </div>
      <div className="md:col-span-2 flex flex-col justify-center text-center md:text-left mt-5">
        <h1 className="text-4xl mb-10">About me</h1>
        <p className="md:text-lg">
          Hi , I'm Pham Ngoc Tan ,I came from Hung Yen province and curently
          living in Hanoi to serve that purpose of education With 1 yrs
          self-experinces with front-end developer , now I'm looking for
          Internship Front-end web development . Although I am just a freshman,
          I have been exposed to and learned about front-end development since
          high school, and have been able to manage my time flexible. I hope
          that the company can consider me for the position. 
          Best regard !
        </p>
      </div>
    </section>
  );
};

export default About;
