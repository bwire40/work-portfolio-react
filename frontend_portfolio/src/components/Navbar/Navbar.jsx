import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Navbar() {
  // states
  const [toggle, setToggle] = useState(false);
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
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <AiOutlineClose onClick={(prev) => setToggle(!prev)} />
            <ul>
              {navLinks.map((item) => (
                <li key={`${item}`} className="">
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
