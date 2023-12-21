import React from "react";
import { HashLink } from "react-router-hash-link";
const MobileNavLinks = ({ setToggle, href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <HashLink
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </HashLink>
    </li>
  );
};

export default MobileNavLinks;