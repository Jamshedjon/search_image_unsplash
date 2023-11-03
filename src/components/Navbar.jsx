import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <NavLink to="/">
        <h1>Unsplash</h1>
      </NavLink>
      <div className=" flex gap-5 items-center">
        <NavLink className="  btn btn-outline " to="/">
          Home
        </NavLink>
        <NavLink className="  btn btn-outline " to="/about">
          About
        </NavLink>
        <NavLink className="  btn btn-outline " to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
