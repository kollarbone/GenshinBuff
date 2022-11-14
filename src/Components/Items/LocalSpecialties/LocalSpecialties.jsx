import React from "react";
import "./LocalSpecialties.css";
import { NavLink } from "react-router-dom";

export default function LocalSpecialties(props) {
  return (
    <div className="AllCharacters">
      {props.local.map((item) => (
        <div className="image_item">
          <div className="weapon_img">
            <img src={item.iconUrl} alt="" className="image_character" />
          </div>
        </div>
      ))}
    </div>
  );
}
