import React from "react";
import "./Weapons.css";
import { NavLink } from "react-router-dom";
import sword from "../Images/Weapons/sword.png";
import bow from "../Images/Weapons/bow.png";
import big_sword from "../Images/Weapons/big_sword.png";
import catalyst from "../Images/Weapons/catalyst.png";
import spear from "../Images/Weapons/spear.png";
import delete_element from "../Images/Elements/delete.png";
import AllWeaponsClass from "./AllWeaponsClass";
import LiveSearchClass from "../Characters/LiveSearch/LiveSearchClass";

export default function Weapons(props) {
  let weapons = props.store.getState().weapons.weapons;

  return (
    <div className="Weapons">
      <div className="characters_header">
        <span>All available weapons Genshin Impact</span>
        <LiveSearchClass main="weapon" />
      </div>
      <div className="character_element">
        <NavLink
          to="/weapons/Sword"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={sword} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/weapons/Bow"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={bow} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/weapons/Claymore"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={big_sword} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/weapons/Catalyst"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={catalyst} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/weapons/Polearm"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={spear} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/weapons/"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img
            src={delete_element}
            alt=""
            className="delete_character_element"
          />
        </NavLink>
      </div>
      <div className="characters">
        <AllWeaponsClass weapons={weapons} />
      </div>
    </div>
  );
}
