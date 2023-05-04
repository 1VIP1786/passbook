import { useState } from "react";
import { NavbarIcon } from "../assets/icons";
import { Button } from "ui";

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

  const handleClick = (event: any) => {};
  return (
    <div className="fixed top-0 md:w-[470px] z-[1] bg-white w-full">
      <div className="p-4">
        <label
          htmlFor="my-drawer"
          className="drawer-button w-5"
          onClick={clickHandler}
        >
          <NavbarIcon />
        </label>
      </div>
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
          <ul className="p-6 pt-16 overflow-y-auto w-72 bg-base-100 flex-col ">
            <li>
              <Button
                className="font-demi w-full"
                onClick={handleClick}
                text="About Us"
              />
            </li>
            <li>
              <Button
                className="font-demi w-full mt-5"
                onClick={handleClick}
                text="Help/FAQs"
              />
            </li>
            <li>
              <Button
                className="font-demi w-full mt-5"
                onClick={handleClick}
                text="Feedback"
              />
            </li>
            <li>
              <Button
                className="font-demi w-full mt-5"
                onClick={handleClick}
                text="Update Family"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
