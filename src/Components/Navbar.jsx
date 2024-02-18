import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src="/logo.png" alt="logo" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : " "}>
        <li className="">
          <NavLink to="/">ALL</NavLink>
        </li>
        <li className="">
          <NavLink to="/fullstack">FULL STACK DEVELOPMENT</NavLink>
        </li>
        <li className="">
          <NavLink to="/datascience">DATA SCIENCE</NavLink>
        </li>
        <li className="">
          <NavLink to="/cybersecurity">CYBER SECURITY</NavLink>
        </li>
        <li className="">
          <NavLink to="/career">CAREER</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
