import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav: React.FC = () => {
  const [isActive, update] = useState<boolean>(false);

  const nav = [
    ["Home", "/home"],
    ["About", "/about"],
    ["Project", "/project"],
    ["Skills", "/skills"],
    ["Contact", "/contact"],
  ];

  const menu = isActive
    ? "md:block w-full md:w-auto md:m-0 border-2 border-zinc-300 p-2 rounded-lg mt-5 md:border-0"
    : "hidden md:block w-full md:w-auto md:m-0 border-2 border-zinc-300 p-2 rounded-lg mt-5 md:border-0 ";

  console.log(menu)
  return (
    <nav className="sm:px-4 px-12 md:py-1 py-2 font-medium bg-opacity-90 bg-white fixed top-0 w-full z-10">
      <div className="container flex flex-wrap md:justify-around justify-between mx-auto">
        <a href="#" className="font-bold font-mono text-2xl flex items-center">
          {"<"}Tan{" />"}
        </a>

        <button onClick={() => update(!isActive)} className="block md:hidden focus:ring-2 focus:ring-gray-200 focus:outline-none  items-center p-2 rounded-lg">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div className={menu}>
          <ul className="flex md:flex-row flex-col m-auto">
            {nav.map(([title, link]) => {
              return (
                <li
                  key={link}
                  className="md:border-0  md:[&:not(:last-child)]:mr-5 p-2 pl-4 border-2 border-zinc-300 rounded-lg [&:not(:last-child)]:mb-2 active:bg-zinc-300 md:active:bg-transparent md:mb-px"
                >
                  <a
                    className=" hover:text-sky-600"
                    href={link}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
