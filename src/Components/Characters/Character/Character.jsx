import React from "react";
import "./Character.css";
import { useParams } from "react-router-dom";

export default function Characters(props) {
  let characters = props.store.getState().characters.characters;
  let characterLink = useParams();
  let characterID = characterLink.character_id - 1;
  let state = characters[characterID];
  console.log(state);
  return (
    <div className="Character">
      <img src={state.big_image} alt="" />
    </div>
  );
}
