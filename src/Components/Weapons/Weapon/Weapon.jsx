import React from "react";
import "./Weapon.css";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Weapon(props) {
  let weapons = props.store.getState().weapons.weapons;
  let weaponsLink = useParams();
  let weaponID = weaponsLink.weapon_id - 1;
  let state = weapons[weaponID];

  return (
    <>
      <div className="Character">
        <div className="main_block_character">
          <div className="character_all_info">
            <div className="weapon_image_info">
              <div className="character_image_info">
                <img
                  src={state.image}
                  alt=""
                  className="character_img"
                  style={{ backgroundColor: state.color }}
                />
                <span className="weapon_main_info">
                  <div className="weapon_info">
                    <span className="name_main_info">Редкость:</span>{" "}
                    <span className="value_main_info">
                      {state.stars === "5" && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar /> <GiRoundStar />
                        </span>
                      )}
                      {state.stars === "4" && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar />
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="weapon_info">
                    <span className="name_main_info">Тип:</span>{" "}
                    <span className="value_main_info">{state.type}</span>
                  </div>

                  {state.bonus.map((item) => (
                    <div className="weapon_info">
                      <span className="name_main_info">{item.type}:</span>{" "}
                      <span className="value_main_info">{item.value}</span>
                    </div>
                  ))}
                </span>
              </div>
              <span className="heading_1">{state.name}:</span>
              <span className="weapon_about">{state.about}</span>
            </div>
          </div>
          <div className="weapon_for_characters">
            <span className="characters_header">
              Для каких персонажей подходит:
            </span>
            <div className="for_characters">
              {state.characters.map((item) => (
                <div
                  className="image_characters"
                  style={{ backgroundColor: item.color }}
                >
                  <NavLink to={"/character/" + item.id}>
                    <img src={item.image} alt="" className="image_character" />
                  </NavLink>
                  <div className="character_name">
                    <NavLink
                      className="character_name"
                      to={"/character/" + item.id}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
