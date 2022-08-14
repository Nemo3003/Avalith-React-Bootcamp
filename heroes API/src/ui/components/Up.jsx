import React from "react";
import { Link } from "react-scroll";
import up from "../../../assets/up.svg";

export const Up = () => {
  return (
    <Link
      activeClass="active"
      to="hero-header"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="page-up"
    >
      <img src={up} alt="Page Up Arrow" />
    </Link>
  );
};

