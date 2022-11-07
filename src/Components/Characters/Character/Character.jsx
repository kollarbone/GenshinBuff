import React from "react";
import "./Character.css";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import Skills from "./Skills/Skills";
import Constellation from "./Constellation/Constellation";

export default function Characters(props) {
  let characterLink = useParams();
  let state = [];
  let characterID = characterLink.character_id;
  props.characters.map((item) => {
    if (item.name === characterID) {
      state = item;
    }
  });

  return (
    <>
      <div className="Character">
        <div className="main_block_character">
          <div className="character_all_info">
            <div className="character_image_info">
              <img
                src={state.iconURL}
                alt=""
                className="character_img"
                style={
                  state.rarity === 5
                    ? { backgroundColor: "#ad7819" }
                    : { backgroundColor: "#2d3548" }
                }
              />
              <span className="character_about">{state.description}</span>
            </div>
            <span className="heading_1">Боевая</span>
            <span className="heading_2">информация</span>
            <div className="skills_and_attack">
              <Skills
                skills={state.combatSkills}
                passive={state.passiveTalents}
              />
            </div>
          </div>
          <div className="character_card">
            <div className="character_card_info">
              <div className="character_card_name">{state.name}</div>
              <div className="character_prev">
                <img
                  src={state.cardImageURL}
                  alt=""
                  className="character_prev_img"
                />
              </div>
              <div className="main_info">
                <span className="character_main_info">
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
                  </span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Оружие:</span>
                  <span className="value_main_info">{state.weaponType}</span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Элемент:</span>
                  <span className="value_main_info">{state.element}</span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">День рождения:</span>
                  <span className="value_main_info">{state.birthday}</span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Регион:</span>
                  <span className="value_main_info">{state.nation}</span>
                </span>
              </div>
              <div className="character_card_name">Титулы</div>
              <span className="character_titul">{state.affiliation}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="constellation">
        <Constellation constellation={state.constellations} />
      </div>
    </>
  );
}
