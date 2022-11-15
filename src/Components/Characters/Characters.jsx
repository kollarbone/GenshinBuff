import React from "react";
import "./Characters.css";
import { NavLink } from "react-router-dom";
import anemo from "../Images/Elements/anemo.png";
import crio from "../Images/Elements/crio.png";
import dendro from "../Images/Elements/dendro.png";
import electro from "../Images/Elements/electro.png";
import geo from "../Images/Elements/geo.png";
import gidro from "../Images/Elements/gidro.png";
import pyro from "../Images/Elements/pyro.png";
import delete_element from "../Images/Elements/delete.png";
import CharactersClass from "./CharactersContainer";

import LiveSearchClass from "./LiveSearch/LiveSearchClass";

export default function Characters(props) {
  let characters = props.store.getState().characters.characters;

  return (
    <div className="Characters">
      <div className="characters_header">
        <a>Все играбельные персонажи Genshin Impact</a>
        <LiveSearchClass main="character" />
      </div>
      <div className="character_element">
        <NavLink
          to="/characters/anemo"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={anemo} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/crio"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={crio} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/dendro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={dendro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/electro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={electro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/geo"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={geo} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/gidro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={gidro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/pyro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={pyro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/characters/"
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
        <CharactersClass characters={characters} />
      </div>
    </div>
  );
}
