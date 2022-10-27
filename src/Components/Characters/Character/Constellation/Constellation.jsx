import React from "react";
import "./Constellation.css";
import { useParams } from "react-router-dom";

export default function Constellation(props) {
  let constellation = props.constellation;
  let characterLink = useParams();
  let constellationID = characterLink.character_id - 1;
  let state = constellation[constellationID];

  return (
    <div className="Constellation">
      <span className="heading_1">Созвездия персонажа</span>
      <span className="heading_2">{props.name}</span>
      {state && (
        <>
          <div className="constellation_character">
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_1.name}</span>
              <span className="attack_key">Уровень созвездия: 1</span>
              <span className="attack_value">{state.level_1.about}</span>
            </div>
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_2.name}</span>
              <span className="attack_key">Уровень созвездия: 2</span>
              <span className="attack_value">{state.level_2.about}</span>
            </div>
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_3.name}</span>
              <span className="attack_key">Уровень созвездия: 3</span>
              <span className="attack_value">{state.level_3.about}</span>
            </div>
          </div>
          <div className="constellation_character">
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_4.name}</span>
              <span className="attack_key">Уровень созвездия: 4</span>
              <span className="attack_value">{state.level_4.about}</span>
            </div>
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_5.name}</span>
              <span className="attack_key">Уровень созвездия: 5</span>
              <span className="attack_value">{state.level_5.about}</span>
            </div>
            <div className="constellation_character_dis">
              <span className="attack_name">{state.level_6.name}</span>
              <span className="attack_key">Уровень созвездия: 6</span>
              <span className="attack_value">{state.level_6.about}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
