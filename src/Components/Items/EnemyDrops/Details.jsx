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
        <span className="item_name">{props.item.name}</span>
        <div className="image_items_characters_list">
          {props.item.characters.map((i) => (
            <NavLink to={"/character/" + i.name}>
              <img
                src={i.cardImageURL}
                alt=""
                className="image_items_characters"
              />
            </NavLink>
          ))}
        </div>
        <div>
          {props.item.sources &&
            props.item.sources.map((i) => <li className="item_name">{i}</li>)}
        </div>
      </div>
    </div>
  );
}
