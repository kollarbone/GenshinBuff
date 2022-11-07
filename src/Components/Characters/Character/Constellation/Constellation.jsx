import React from "react";
import "./Constellation.css";

export default function Constellation(props) {
  return (
    <div className="Constellation">
      {props.constellation && (
        <>
          <span className="heading_1">Созвездия персонажа</span>
          <span className="heading_2">{props.name}</span>
          <div className="constellation_character">
            {props.constellation.map((item) => (
              <>
                <div className="constellation_character_dis">
                  <span className="attack_name">{item.name}</span>
                  <span className="attack_key">{item.unlock}</span>
                  <span className="attack_value">{item.description}</span>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
