import React from "react";
import "./MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function CurrentTalents(props) {
  console.log(props.talents);
  return (
    <div className="CurrentTalents">
      <div className="headings">
        <span className="heading_1">Таланты</span>
        <span className="heading_2">сегодня</span>
        <div className="calendarIcon">
          <BsBook />
        </div>
      </div>
      {props.talents.map((item) => (
        <div className="talents">
          <div className="talent">
            <img src={item.iconUrl} alt="" className="image_talent" />
          </div>
          <div className="image_character">
            {item.characters.map((i) => (
              <NavLink to={"/character/" + i.name}>
                <img
                  src={i.iconURL}
                  alt=""
                  className="image_talent_character"
                  style={i.rarity === 5 ? { backgroundColor: "#ad7819" } : {}}
                />
              </NavLink>
            ))}
          </div>
        </div>
      ))}
      <div className="headings">
        <span className="heading_1">Предметы</span>
        <span className="heading_2">сегодня</span>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
      </div>
      {props.weapons.map((item) => (
        <div className="talents">
          <div className="talent">
            <img src={item.iconUrl} alt="" className="image_talent" />
          </div>
          {item.weapons && (
            <div className="image_character">
              {item.weapons.map((i) => (
                <NavLink to={"/weapon/" + i.name}>
                  <img
                    src={i.iconUrl}
                    alt=""
                    className="image_talent_character"
                  />
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
