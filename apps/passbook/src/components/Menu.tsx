import { useState } from "react";
import { NavbarIcon } from "../assets/icons";

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState("");

  const clickHandler = () => {
    setIsOpen(!isOpen);

    // // I'm still testing this part:
    setTimeout(() => {
      setHide("z-n1 absolute");
    }, 1000);
  };

  const fullPage = isOpen ? "fixed z-20 h-screen w-full" : hide;

  console.log("OPEN:", isOpen);
  return (
    <>
      <label
        htmlFor="my-drawer"
        className="drawer-button w-5"
        onClick={clickHandler}
      >
        <NavbarIcon />
      </label>

      <div className={`drawer fixed h-screen w-full ${fullPage} `}>
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isOpen}
        />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            onClick={clickHandler}
          ></label>
          <ul className="p-6 pt-16 overflow-y-auto w-64 bg-base-100 flex-col ">
            <li>
              <a
                href="#section-projects"
                className="btn w-full mb-5"
                onClick={clickHandler}
              >
                Projects
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-blog-posts"
                className="btn w-full mb-5"
                onClick={clickHandler}
              >
                Blog<span className="hidden sm:inline sm:ml-2">Posts</span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-about"
                className="btn w-full mb-5"
                onClick={clickHandler}
              >
                About
              </a>{" "}
            </li>
            <li>
              <a
                href="#section-contact"
                className="btn w-full mb-5"
                onClick={clickHandler}
              >
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
