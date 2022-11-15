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
        <span className="item_name">
          {props.item.name}(
          {props.item.farmingDays &&
            props.item.farmingDays.map((i) => (
              <span className="item_name_day">{i}</span>
            ))}
          )
        </span>
        <div className="image_items_characters_list">
          {props.item.characters &&
            props.item.characters.map((i) => (
              <NavLink to={"/character/" + i.name}>
                <img
                  src={i.cardImageURL}
                  alt=""
                  className="image_items_characters"
                />
              </NavLink>
            ))}
          {props.item.weapons &&
            props.item.weapons.map((i) => (
              <NavLink to={"/weapon/" + i.name}>
                <img
                  src={i.iconUrl}
                  alt=""
                  className="image_items_characters"
                />
              </NavLink>
            ))}
        </div>
        <div>
          {props.item.sources &&
            props.item.sources.map((i) => <li className="item_name">{i}</li>)}
          {props.item.description && (
            <li className="item_name">{props.item.description}</li>
          )}
        </div>
      </div>
    </div>
  );
}
