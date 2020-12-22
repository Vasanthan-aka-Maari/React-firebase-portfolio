import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        <img
          src="https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"
          alt=""
        />
      </NavLink>
      <ul className="links">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/works" className="link">
            Works
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
