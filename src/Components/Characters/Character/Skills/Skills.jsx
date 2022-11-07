import React from "react";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="Skills">
      {props.skills && (
        <div className="attack_skills">
          <div className="attack">
            <span className="attack_name">{props.skills[0].name} </span>
            <span className="attack_key">Обычная атака:</span>
            {props.skills[0].variants.map((item) => (
              <>
                <span className="attack_key">{item.type}</span>
                <span className="attack_value">{item.description}</span>
                <img className="giff_character" src={item.gifUrl} alt="" />
              </>
            ))}
          </div>
          <div className="attack">
            <span className="attack_name">{props.skills[1].name} </span>
            <span className="attack_key">Элементальный навык</span>
            <span className="attack_value">{props.skills[1].about}</span>
            {props.skills[1].variants.map((item) => (
              <>
                {item.description && (
                  <>
                    <span className="attack_key">{item.type}</span>
                    <span className="attack_value">{item.description}</span>
                    <img className="giff_character" src={item.gifUrl} alt="" />
                  </>
                )}
              </>
            ))}
          </div>
          <div className="attack">
            <span className="attack_name">{props.skills[2].name} </span>
            <span className="attack_key">Элементальный навык</span>
            <span className="attack_value">{props.skills[2].about}</span>
            {props.skills[2].variants.map((item) => (
              <>
                <span className="attack_key">{item.type}</span>
                <span className="attack_value">{item.description}</span>
                <img className="giff_character" src={item.gifUrl} alt="" />
              </>
            ))}
          </div>
        </div>
      )}
      {props.passive && (
        <div className="passive_skills">
          {props.passive.map((item) => (
            <div className="attack_skills">
              <div className="passive">
                <span className="attack_name">{item.name} </span>
                <span className="attack_key">Пассивный навык:</span>
                <span className="attack_value">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
