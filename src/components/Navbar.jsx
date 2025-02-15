import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = ({ setOpen, Open }) => {
  return (
    <nav>
      <div className="text-white pb-7">
        <div className="container  px-0">
          <div className="flex justify-between items-center ">
            <h1 className="text-4xl font-extrabold">
              STRAW<span>BERRIES</span>
            </h1>
            <ul className=" hidden lg:flex gap-8 md:space-x-8 ">
              <li>
                <a href="#"></a>Home
              </li>
              <li>
                <a href="#"></a> Find
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
            </ul>
            <div className="z-20 ">
              <GiHamburgerMenu
                onClick={() => {
                  setOpen(!Open);
                }}
                className="text-3xl cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
