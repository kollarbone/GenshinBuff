import React, { useState } from "react";
import "./Character.css";
import { GiRoundStar } from "react-icons/gi";
import Skills from "./Skills/Skills";
import Constellation from "./Constellation/Constellation";
import { HiChevronDown } from "react-icons/hi";

export default function Characters(props) {
  const [isShow, setIsShow] = useState(true);
  const toggleShowHide = () => setIsShow(!isShow);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [burger_class, setBurgerClass] = useState("click_bar unclicked");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("click_bar clicked");
    } else {
      setBurgerClass("click_bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <>
      <div className="Character">
        <div className="main_block_character">
          <div className="character_all_info">
            <div className="character_image_info">
              <img
                src={props.character.iconURL}
                alt=""
                className="character_img"
                style={
                  props.character.rarity === 5
                    ? { backgroundColor: "#ad7819" }
                    : { backgroundColor: "#2d3548" }
                }
              />
              <span className="character_about">
                {props.character.description}
              </span>
            </div>
            <div className="attack_header">
              <span className="heading_1">Боевая</span>
              <span className="heading_2">информация</span>
              <div className={burger_class} onClick={toggleShowHide}>
                <HiChevronDown onClick={updateMenu} />
              </div>
            </div>
            {isShow && (
              <div className="skills_and_attack">
                <Skills
                  skills={props.character.combatSkills}
                  passive={props.character.passiveTalents}
                />
              </div>
            )}
          </div>
          <div className="character_card">
            <div className="character_card_info">
              <div className="character_card_name">{props.character.name}</div>
              <div className="character_prev">
                <img
                  src={props.character.cardImageURL}
                  alt=""
                  className="character_prev_img"
                />
              </div>
              <div className="main_info">
                <span className="character_main_info">
                  <span className="name_main_info">Редкость:</span>{" "}
                  <span className="value_main_info">
                    {props.character.rarity === 5 && (
                      <span className="stars">
                        {" "}
                        <GiRoundStar /> <GiRoundStar /> <GiRoundStar />{" "}
                        <GiRoundStar /> <GiRoundStar />
                      </span>
                    )}
                    {props.character.rarity === 4 && (
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
                  <span className="value_main_info">
                    {props.character.weaponType}
                  </span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Элемент:</span>
                  <span className="value_main_info">
                    {props.character.element}
                  </span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">День рождения:</span>
                  <span className="value_main_info">
                    {props.character.birthday}
                  </span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Регион:</span>
                  <span className="value_main_info">
                    {props.character.nation}
                  </span>
                </span>
              </div>
              <div className="character_card_name">Титулы</div>
              <span className="character_titul">
                {props.character.affiliation}
              </span>
            </div>
            <div className="materials_for_character">
              <div className="block_materials_for_character">
                <span className="attack_name">Книги талантов:</span>
                {props.character.talentBook && (
                  <div className="material_for_character">
                    {props.character.talentBook.map((item) => (
                      <div className="talent_book">
                        <img
                          src={item.iconUrl}
                          alt=""
                          className="image_talent_book"
                        />
                        <span className="name_talent_book">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="block_materials_for_character">
                <span className="attack_name">Материалы талантов:</span>
                {props.character.talentMaterial && (
                  <div className="material_for_character">
                    {props.character.talentMaterial.map((item) => (
                      <div className="talent_book">
                        <img
                          src={item.iconUrl}
                          alt=""
                          className="image_talent_book"
                        />
                        <span className="name_talent_book">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="block_materials_for_character">
                <span className="attack_name">Расходные материалы:</span>
                {props.character.commonAscensionMaterials && (
                  <div className="material_for_character">
                    {props.character.commonAscensionMaterials.map((item) => (
                      <div className="talent_book">
                        <img
                          src={item.iconUrl}
                          alt=""
                          className="image_talent_book"
                        />
                        <span className="name_talent_book">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="block_materials_for_character">
                <span className="attack_name">Материалы для возвышения:</span>
                {props.character.ascensionMaterials && (
                  <div className="material_for_character">
                    {props.character.ascensionMaterials.map((item) => (
                      <div className="talent_book">
                        <img
                          src={item.iconUrl}
                          alt=""
                          className="image_talent_book"
                        />
                        <span className="name_talent_book">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="block_materials_for_character">
                <span className="attack_name">Собираемые предметы:</span>
                {props.character.localSpecialty && (
                  <div className="localSpecialty_for_character">
                    <div className="talent_book">
                      <img
                        src={props.character.localSpecialty.iconUrl}
                        alt=""
                        className="image_talent_book"
                      />
                      <span className="name_talent_book">
                        {props.character.localSpecialty.name}
                      </span>
                    </div>
                    <div className="localSpecialty_list">
                      {props.character.localSpecialty.sources.map((item) => (
                        <li>{item}</li>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="constellation">
        <Constellation constellation={props.character.constellations} />
      </div>
    </>
  );
}
