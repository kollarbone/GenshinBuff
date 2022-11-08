import React from "react";
import "./Weapon.css";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Weapon(props) {
  let weaponsLink = useParams();
  let state = [];
  let weaponID = weaponsLink.weapon_id;
  props.weapons.map((item) => {
    if (item.name === weaponID) {
      state = item;
    }
  });
  return (
    <>
      <div className="Character">
        <div className="main_block_weapon">
          <div className="character_all_info">
            <div className="weapon_image_info">
              <div className="character_image_info">
                <img src={state.iconUrl} alt="" className="character_img" />
                <span className="weapon_main_info">
                  <div className="weapon_info">
                    <span className="name_main_info">Редкость:</span>{" "}
                    <span className="value_main_info">
                      {state.rarity === 5 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar /> <GiRoundStar />
                        </span>
                      )}
                      {state.rarity === 4 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                          <GiRoundStar />
                        </span>
                      )}
                      {state.rarity === 3 && (
                        <span className="stars">
                          {" "}
                          <GiRoundStar /> <GiRoundStar /> <GiRoundStar />
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="weapon_info">
                    <span className="name_main_info">Тип:</span>{" "}
                    <span className="value_main_info">{state.weaponType}</span>
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
            <div>
              <span className="material_header">
                Для каких персонажей подходит:
              </span>
              <div className="for_characters">
                {state.characters.map((item) => (
                  <div
                    className="image_characters"
                    style={{ backgroundColor: item.color }}
                  >
                    <NavLink to={"/character/" + item.id}>
                      <img
                        src={item.image}
                        alt=""
                        className="image_character"
                      />
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
            <div>
              <span className="material_header">Материал для возвышения:</span>
              <div className="image_material">
                <img
                  src={state.material.image}
                  alt=""
                  className="image_material_img"
                />
                <div className="material_name">{state.material.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
