import React from "react";
import { NavLink } from "react-router-dom";
import "./EnemyDrops.css";
import delete_element from "../../Images/Elements/delete.png";
export default function Details(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="detail_items">
      <img
        src={delete_element}
        alt=""
        className="close_details"
        onClick={props.onClose}
      />
      <div className="list_details">
        <span>{props.item.name}</span>
        <div>
          {props.item.characters.map((i) => (
            <img src={i.cardImageURL} alt="" className="image_talent_book" />
          ))}
        </div>
      </div>
    </div>
  );
}
