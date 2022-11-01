import React, { useState } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Burger from "./Burger/Burger";
import GoBack from "./GoBack/GoBack";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

export default function Header(props) {
  const [dropdown_class, setDropdownClass] = useState("dropdown_hidden");
  const [profile_dropdown_class, setProfileDropdownClass] = useState(
    "profile_dropdown_hidden"
  );
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const updateNotification = () => {
    if (!isDropdownClicked) {
      setDropdownClass("dropdown_visible");
    } else {
      setDropdownClass("dropdown_hidden");
    }
    setIsDropdownClicked(!isDropdownClicked);
  };
  const updateProfile = () => {
    if (!isDropdownClicked) {
      setProfileDropdownClass("profile_dropdown_visible");
    } else {
      setProfileDropdownClass("profile_dropdown_hidden");
    }
    setIsDropdownClicked(!isDropdownClicked);
  };
  return (
    <div className="header">
      <div className="burger">
        <Burger />
      </div>
      <div className="logo">
        <a className="logo_1">GENSHIN</a>
        <a className="logo_2">BUFF</a>
      </div>
      <div className="goBack">
        <GoBack theme={props.theme} />
      </div>
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
