const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 flex-col items-center justify-center h-40 text-center flex">
      <div className="">
        <p className="font-extrabold inline">{" </> "}</p>
        with 💖 by{" "}
        <span className="bg-black text-white py-0.5 px-1 rounded-md mx-2">
          <a href="https://github.com/tan-developer">tan</a>
        </span>
        using <i className="fa-brands fa-react ml-2 text-xl"></i>
      </div>
      
      <div className="">Project code is open source. Feel free to fork and make your own version.</div>
    </footer>
  );
};

export default Footer;
