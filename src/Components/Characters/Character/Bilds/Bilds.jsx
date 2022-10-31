import React from "react";
import "./Bilds.css";
import { useParams } from "react-router-dom";
import { GiSandsOfTime } from "react-icons/gi";
import { RiTrophyLine } from "react-icons/ri";
import { GiJewelCrown } from "react-icons/gi";

export default function Bilds(props) {
  let bilds = props.bilds;
  let characterLink = useParams();
  let bildsID = characterLink.character_id - 1;
  let state = bilds[bildsID];
  let bild = [];
  if (state) {
    bild = state.map((item) => (
      <div className="bild">
        <span className="bild_name">{item.name}</span>
        <div className="character_bild_block">
          <div className="character_bild">
            <span className="heading_3">Оружие и артефакты</span>
            <div className="weapon_artif">
              <div className="weapon_artif_mobile">
                <img
                  src={item.weapon.image}
                  alt=""
                  className="image_character_bild"
                />
                <span className="heading_3">{item.weapon.name}</span>
              </div>
              {item.artif.map((i) => (
                <div className="weapon_artif_mobile">
                  <img src={i.image} alt="" className="image_character_bild" />
                  <span className="heading_3">{i.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="character_bild_bonus">
            <span className="heading_3">Бонусы сборки</span>
            <div>
              {item.bonus.map((i) => (
                <div>
                  <span className="attack_value">— {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="character_bild_block_alternative">
          <div className="character_bild_alternative">
            <span className="heading_3">
              Рекомендуемые характеристики артефактов
            </span>
            <div className="recomend_character">
              <div>
                <div className="additional">
                  <GiSandsOfTime
                    style={{ color: "#fff" }}
                    className="artif_image"
                  />
                  <div>
                    {item.specifications.clock.map((i) => (
                      <span className="heading_5">{i}</span>
                    ))}
                  </div>
                </div>
                <div className="additional">
                  <RiTrophyLine
                    style={{ color: "#fff" }}
                    className="artif_image"
                  />
                  <div>
                    {item.specifications.cup.map((i) => (
                      <span className="heading_5">{i}</span>
                    ))}
                  </div>
                </div>
                <div className="additional">
                  <GiJewelCrown
                    style={{ color: "#fff" }}
                    className="artif_image"
                  />
                  <div>
                    {item.specifications.crown.map((i) => (
                      <span className="heading_5">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="additional">
                  <span className="heading_4">Доп: </span>
                  <div>
                    {item.specifications.additionally.map((i) => (
                      <span className="heading_5">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="character_bild_alternative_weapon">
            <span className="heading_3">Альтернативные варианты оружия</span>
            <div className="additional_weapons">
              {item.weapon_options.map((i) => (
                <div className="additional_weapon">
                  <img src={i.image} alt="" className="image_character_bild" />
                  <span className="heading_3">{i.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="Bilds">
      <span className="heading_1">Лучшие билды для</span>
      <span className="heading_2">{props.name}</span>
      {state && <>{bild}</>}
    </div>
  );
}
