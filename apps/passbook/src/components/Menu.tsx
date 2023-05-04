import { useState } from "react";
import { NavbarIcon, NotificationIcon } from "../assets/icons";
import { Button } from "ui";
import Link from "next/link";

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState("");

  const clickHandler = () => {
    setIsOpen(!isOpen);

    // // I'm still testing this part:
    setTimeout(() => {
      setHide("absolute");
    }, 1000);
  };

  const fullPage = isOpen ? "z-20 h-screen w-full" : hide;

  const handleClick = (event: any) => {};
  return (
    <>
      <div className="fixed top-0 md:w-[470px] bg-white w-full border-t border-gray-200">
        <div className="flex h-full max-w-lg justify-between mx-auto font-medium p-4">
          <label
            htmlFor="my-drawer"
            className="drawer-button w-5"
            onClick={clickHandler}
          >
            <NavbarIcon />
          </label>
          <div className="inline-flex flex-col items-end justify-center group">
            <Link href="/notifications">
              <NotificationIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${fullPage} drawer fixed min-h-screen w-full z-[-1]`}>
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
    </>
  );
};

export default HamburgerMenu;
