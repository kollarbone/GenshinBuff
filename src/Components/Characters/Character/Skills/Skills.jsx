import React from "react";
import "./Skills.css";
import { useParams } from "react-router-dom";

export default function Skills(props) {
  let skills = props.skills;
  let characterLink = useParams();
  let skillsID = characterLink.character_id - 1;
  let state = skills[skillsID];

  return (
    <div className="Skills">
      <span className="heading_1">Таланты и навыки персонажа</span>
      <span className="heading_2">{props.name}</span>
      {state && (
        <div className="attack_skills">
          <div className="attack">
            <span className="attack_name">{state.attack.name} </span>
            <span className="attack_key">Обычная атака:</span>
            <span className="attack_value">{state.attack.simple}</span>
            <span className="attack_key">Заряженная атака:</span>
            <span className="attack_value">{state.attack.charged}</span>
            <span className="attack_key">Атака в падении:</span>
            <span className="attack_value">{state.attack.falling}</span>
          </div>
          <div className="attack">
            <span className="attack_name">{state.elemental.name} </span>
            <span className="attack_key">Элементальный навык</span>
            <span className="attack_value">{state.elemental.about}</span>
            {state.elemental.fast && (
              <>
                <span className="attack_key">Быстрое нажатие</span>
                <span className="attack_value">{state.elemental.fast}</span>
              </>
            )}
            {state.elemental.long && (
              <>
                <span className="attack_key">Долгое нажатие</span>
                <span className="attack_value">{state.elemental.long}</span>
              </>
            )}
          </div>
          <div className="attack">
            <span className="attack_name">{state.explosion.name} </span>
            <span className="attack_key">Взрыв стихии</span>
            <span className="attack_value">{state.explosion.about}</span>
          </div>
        </div>
      )}
    </div>
  );
}
