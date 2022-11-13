import React, { useState } from "react";
import "./Burger.css";
import { NavLink } from "react-router-dom";

export default function Burger(props) {
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={props.theme === "light" ? "burger" : "burger__dark"}>
      <nav>
        <div className="burger_menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
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
          <NavLink to="/tier_list" className="item" activeclassname="active">
            Предметя
          </NavLink>
        </div>
        <div className="items">
          <NavLink to="/map" className="item" activeclassname="active">
            Материалы
          </NavLink>
        </div>
      </div>
    </div>
  );
}
