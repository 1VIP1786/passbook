import Link from "next/link";
import { NavbarIcon, NotificationIcon } from "../assets/icons";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 md:w-[768px] w-full z-50 h-12 bg-white border-t border-gray-200 ">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
          <div className="inline-flex flex-col items-start justify-center px-5 group">
            <NavbarIcon />
          </div>
          <div></div>
          <div className="inline-flex flex-col items-end justify-center px-5 group">
            <Link href="/notifications">
              <NotificationIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
