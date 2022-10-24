import React from "react";
import "./Characters.css";

export default function Characters(props) {
  let elements = props.store.getState().characters.elements;
  let character_element = elements.map((item) => (
    <img src={item} alt="" className="image_character_element" />
  ));
  return (
    <div className="Characters">
      <div className="characters_header">
        <a>Все играбельные персонажи Genshin Impact</a>
        <input className="input" type="text" placeholder="Поиск.." />
      </div>
      <div className="character_element">{character_element}</div>
    </div>
  );
}
