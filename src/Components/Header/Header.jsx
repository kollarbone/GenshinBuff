import React, { useState } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <a className="logo_1">GENSHIN</a>
        <a className="logo_2">BUFF</a>
      </div>
      <div className="nav_bar">
        <NavBar theme={props.theme} />
      </div>
    </div>
  );
}
