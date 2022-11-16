import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <nav className="navBar">
      <div className="items">
        <NavLink to="/main" className="item" activeclassname="active">
          Main
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/characters" className="item" activeclassname="active">
          Characters
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/weapons" className="item" activeclassname="active">
          Weapons
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/items" className="item" activeclassname="active">
          Items
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/materials" className="item" activeclassname="active">
          Materials
        </NavLink>
      </div>
    </nav>
  );
}
