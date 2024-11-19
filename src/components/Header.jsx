import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>Virtual India</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/festivals">Festivals</Link>
        <Link to="/monuments">Monuments</Link>
      </nav>
    </header>
  );
}

export default Header;
