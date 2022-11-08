import React from "react";
import "./Weapon.css";
import { GiRoundStar } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Weapon(props) {
  return (
    <>
      <div className="Character">
        <div className="main_block_weapon">
          <div className="character_all_info">
            <div className="weapon_image_info">
              <div className="character_image_info">
                <img
                  src={props.weapon.iconUrl}
                  alt=""
                  className="character_img"
                />
                <span className="weapon_main_info">
                  <div className="weapon_info">
                    <span className="name_main_info">Редкость:</span>{" "}
                    <span className="value_main_info">
                      {props.weapon.rarity === 5 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar /> <GiRoundStar />
                        </span>
                      )}
                      {props.weapon.rarity === 4 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar />
                        </span>
                      )}
                      {props.weapon.rarity === 3 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="weapon_info">
                    <span className="name_main_info">Тип:</span>
                    <span className="value_main_info">
                      {props.weapon.weaponType}
                    </span>
                  </div>
                  <div className="weapon_info">
                    <span className="name_main_info">Базовая атака</span>
                    <span className="value_main_info">
                      {props.weapon.baseAtk}
                    </span>
                  </div>
                </span>
              </div>
              <span className="heading_1">{props.weapon.name}:</span>
              <span className="weapon_about">{props.weapon.description}</span>
            </div>
          </div>
          <div className="weapon_for_characters">
            <div>
              <span className="material_header">
                Для каких персонажей подходит:
              </span>
              <div className="for_characters"></div>
            </div>
            <div>
              <span className="material_header">Материал для возвышения:</span>
              <div className="image_material"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
