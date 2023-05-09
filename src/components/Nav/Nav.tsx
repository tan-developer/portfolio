import React, { useEffect } from "react";
import { GhostNavbar } from "react-hamburger-menus";

import scroll from "../../js/scroll";

const data = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Project", "/project"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];

const Nav: React.FC = () => {
  const [change, commitChange] = React.useState<boolean>(false);
  const [arr, setArr] = React.useState<[HTMLInputElement, HTMLLabelElement]>();

  useEffect(() => {
    window.addEventListener("load", () => {
      let input, label;
      input = document.getElementById(
        "rhm-gn-navigation-toggle-input"
      ) as HTMLInputElement;
      label = document.querySelectorAll(
        '[for="rhm-gn-navigation-toggle-input"]'
      )[0] as HTMLLabelElement;

      setArr([input , label]);
    });


    if (arr) {
      arr[0].checked = !arr[0].checked
    }
  }, [change]);

  return (
    <GhostNavbar
      id="input"
      fontColor="white"
      fontHoverColor="black"
      floatButtonX={5}
      floatButtonY={5}
      styles={{
        navigationBackground: {
          backgroundColor: "black",
        },

        navigationButton: {
          width: "5rem",
          height: "5rem",
          fontSize: "1rem",
        },
      }}
    >
      <ul>
        {data.map(([label, link]) => {
          return (
            <li
              key={link}
              onClick={() => {
                scroll(label);
                commitChange(!change);
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </GhostNavbar>
  );
};

export default Nav;
