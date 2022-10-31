import React from "react";
import "./Character.css";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import ReactPlayer from "react-player/youtube";
import Skills from "./Skills/Skills";
import Constellation from "./Constellation/Constellation";
import Bilds from "./Bilds/Bilds";

export default function Characters(props) {
  let characters = props.store.getState().characters.characters;
  let characterLink = useParams();
  let characterID = characterLink.character_id - 1;
  let state = characters[characterID];
  let common = "";
  let common_2 = "";
  let abyss = "";
  let abyss_2 = "";
  let mainDPS = "";
  let mainDPS_2 = "";
  let subDPS = "";
  let subDPS_2 = "";
  let support = "";
  let support_2 = "";
  let world = "";
  let world_2 = "";
  if (state.rait[0]) {
    if (state.rait[0].common === "S") {
      common = "#ffbf7f";
      common_2 = "#2d3548";
    } else if (state.rait[0].common === "A") {
      common = "#ffff7f";
      common_2 = "#2d3548";
    } else if (state.rait[0].common === "B") {
      common = "#bfff7f";
      common_2 = "#2d3548";
    } else if (state.rait[0].common === "C") {
      common = "#8ee88e";
      common_2 = "#2d3548";
    }
    if (state.rait[0].abyss === "S") {
      abyss = "#ffbf7f";
      abyss_2 = "#2d3548";
    } else if (state.rait[0].abyss === "A") {
      abyss = "#ffff7f";
      abyss_2 = "#2d3548";
    } else if (state.rait[0].abyss === "B") {
      abyss = "#bfff7f";
      abyss_2 = "#2d3548";
    } else if (state.rait[0].abyss === "C") {
      abyss = "#8ee88e";
      abyss_2 = "#2d3548";
    }
    if (state.rait[0].mainDPS === "S") {
      mainDPS = "#ffbf7f";
      mainDPS_2 = "#2d3548";
    } else if (state.rait[0].mainDPS === "A") {
      mainDPS = "#ffff7f";
      mainDPS_2 = "#2d3548";
    } else if (state.rait[0].mainDPS === "B") {
      mainDPS = "#bfff7f";
      mainDPS_2 = "#2d3548";
    } else if (state.rait[0].mainDPS === "C") {
      mainDPS = "#8ee88e";
      mainDPS_2 = "#2d3548";
    }
    if (state.rait[0].subDPS === "S") {
      subDPS = "#ffbf7f";
      subDPS_2 = "#2d3548";
    } else if (state.rait[0].subDPS === "A") {
      subDPS = "#ffff7f";
      subDPS_2 = "#2d3548";
    } else if (state.rait[0].subDPS === "B") {
      subDPS = "#bfff7f";
      subDPS_2 = "#2d3548";
    } else if (state.rait[0].subDPS === "C") {
      subDPS = "#8ee88e";
      subDPS_2 = "#2d3548";
    }
    if (state.rait[0].support === "S") {
      support = "#ffbf7f";
      support_2 = "#2d3548";
    } else if (state.rait[0].support === "A") {
      support = "#ffff7f";
      support_2 = "#2d3548";
    } else if (state.rait[0].support === "B") {
      support = "#bfff7f";
      support_2 = "#2d3548";
    } else if (state.rait[0].support === "C") {
      support = "#8ee88e";
      support_2 = "#2d3548";
    }
    if (state.rait[0].world === "S") {
      world = "#ffbf7f";
      world_2 = "#2d3548";
    } else if (state.rait[0].world === "A") {
      world = "#ffff7f";
      world_2 = "#2d3548";
    } else if (state.rait[0].world === "B") {
      world = "#bfff7f";
      world_2 = "#2d3548";
    } else if (state.rait[0].world === "C") {
      world = "#8ee88e";
      world_2 = "#2d3548";
    }
  }
  let video = [];
  if (state.videos) {
    video = state.videos.map((item) => (
      <>
        <div className="character_video">
          <ReactPlayer url={item} width="500px" height="270px" />
        </div>
        <div className="character_video_mobile">
          <ReactPlayer url={item} width="350px" height="170px" />
        </div>
      </>
    ));
  }
  return (
    <>
      <div className="Character">
        <div className="main_block_character">
          <div className="character_all_info">
            <div className="character_image_info">
              <img
                src={state.image}
                alt=""
                className="character_img"
                style={{ backgroundColor: state.color }}
              />
              <span className="character_about">{state.about}</span>
            </div>
            <span className="heading_1">Боевая</span>{" "}
            <span className="heading_2">информация</span>
            <div className="character_rait_combat_info">
              <div className="character_combat_info">
                <span className="combat_info">{state.сombat}</span>
              </div>
              <div className="character_rait">
                <span className="heading_1">Рейтинг</span>
                <span className="heading_2">персонажа</span>
                <div className="character_all_rait">
                  <div className="rait">
                    <div className="character_rait_name">Общий рейтинг</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: common, color: common_2 }}
                    >
                      {state.rait[0].common}
                    </span>
                  </div>
                  <div className="rait">
                    <div className="character_rait_name">Бездна</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: abyss, color: abyss_2 }}
                    >
                      {state.rait[0].abyss}
                    </span>
                  </div>
                  <div className="rait">
                    <div className="character_rait_name">Main DPS</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: mainDPS, color: mainDPS_2 }}
                    >
                      {state.rait[0].mainDPS}
                    </span>
                  </div>
                  <div className="rait">
                    <div className="character_rait_name">Sub DPS</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: subDPS, color: subDPS_2 }}
                    >
                      {state.rait[0].subDPS}
                    </span>
                  </div>
                  <div className="rait">
                    <div className="character_rait_name">Support</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: support, color: support_2 }}
                    >
                      {state.rait[0].support}
                    </span>
                  </div>
                  <div className="rait">
                    <div className="character_rait_name">Мир</div>
                    <span
                      className="character_raiting"
                      style={{ backgroundColor: world, color: world_2 }}
                    >
                      {state.rait[0].world}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="heading_1">Видео</span>
            <span className="heading_2">персонажа</span>
            <div className="character_videos">{video}</div>
          </div>
          <div className="character_card">
            <div className="character_card_info">
              <div className="character_card_name">{state.name}</div>
              <div className="character_prev">
                <img
                  src={state.big_image}
                  alt=""
                  className="character_prev_img"
                />
              </div>
              <div className="main_info">
                <span className="character_main_info">
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
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Оружие:</span>
                  <span className="value_main_info">{state.weapon}</span>
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
                  <span className="name_main_info">Созвездие:</span>
                  <span className="value_main_info">{state.constellation}</span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Регион:</span>
                  <span className="value_main_info">{state.region}</span>
                </span>
                <span className="character_main_info">
                  <span className="name_main_info">Дата релиза:</span>
                  <span className="value_main_info">{state.date}</span>
                </span>
              </div>
              <div className="character_card_name">Титулы</div>
              <span className="character_titul">{state.titul}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skills_and_attack">
        <Skills
          skills={props.store.getState().characters.skills}
          name={state.name}
        />
      </div>
      <div className="skills_and_attack">
        <Constellation
          constellation={props.store.getState().characters.constellation}
          name={state.name}
        />
      </div>
      <div className="bilds_character">
        <Bilds
          bilds={props.store.getState().characters.bilds}
          name={state.name}
        />
      </div>
    </>
  );
}
