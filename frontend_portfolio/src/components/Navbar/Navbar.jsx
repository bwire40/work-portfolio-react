import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";

import { HiMenuAlt4 } from "react-icons/hi";

function Navbar() {
  // nav items
  const navLinks = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app__navbar">
      <div classsName="app__navbar-logo">
        <img
          src={images.logo}
          alt="logo"
          className="xl:w-[180px] xl:h-[40px]"
        />
      </div>
      <ul className="app__navbar-links ">
        {navLinks.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text ">
            <div></div>
            <a href={`#${item}`} className="">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile view  */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 />
      </div>
    </nav>
  );
}

export default Navbar;
