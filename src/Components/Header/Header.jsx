import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Burger from "./Burger/Burger";
import GoBack from "./GoBack/GoBack";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <div className="burger">
        <Burger />
      </div>
      <NavLink to="/main" className="logo_link">
        <span className="logo_1">GENSHIN</span>
        <span className="logo_2">BUFF</span>
      </NavLink>
      <GoBack theme={props.theme} />
      <div className="theme_icon">
        <button onClick={props.toggleTheme}>
          {props.theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
      </div>
      <div className="nav_bar">
        <NavBar theme={props.theme} />
      </div>
    </div>
  );
}
