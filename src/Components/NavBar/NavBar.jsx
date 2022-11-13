import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <nav className="navBar">
      <div className="items">
        <NavLink to="/main" className="item" activeclassname="active">
          Главная
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/characters" className="item" activeclassname="active">
          Персонажи
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/weapons" className="item" activeclassname="active">
          Оружие
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/tier_list" className="item_more" activeclassname="active">
          Предметы
        </NavLink>
      </div>
      <div className="items">
        <NavLink to="/tier_list" className="item_more" activeclassname="active">
          Материалы
        </NavLink>
      </div>
    </nav>
  );
}
