import React from "react";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <header className="center" id="hero-header">
      <Link to="/" className="center header-link">
        <h1 className="header-title">SuperHeroes Info</h1>
      </Link>
    </header>
  );
};