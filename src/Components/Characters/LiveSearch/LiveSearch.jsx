import React, { useState } from "react";
import "./LiveSearch.css";
import { NavLink } from "react-router-dom";

export default function LiveSearch(props) {
  const characters = props.state;
  const [value, setValue] = useState("");
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="LiveSearch">
      <form className="search_form">
        <input
          className="input"
          type="text"
          placeholder="Поиск.."
          onChange={(event) => setValue(event.target.value)}
        />
        <ul className="auto_complete">
          {value
            ? filteredCharacters.map((character, index) => {
                return (
                  <NavLink
                    className="search_character_name_link"
                    to={"/character/" + character.id}
                  >
                    <li className="auto_complete_item">
                      <img
                        src={character.image}
                        alt=""
                        className="image_character"
                      />
                      <div className="search_character_name">
                        {character.name}
                      </div>
                    </li>
                  </NavLink>
                );
              })
            : null}
        </ul>
      </form>
    </div>
  );
}
