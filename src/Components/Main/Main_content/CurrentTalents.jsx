import React from "react";
import "./MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";

export default function CurrentTalents(talents) {
  let talent = talents.talents[0].monday.map((item) => (
    <div className="talents">
      <div className="talent">
        <img src={item.image} alt="" className="image_talent" />
      </div>
      <div className="image_character">
        {item.characters.map((i) => (
          <img src={i} alt="" className="image_talent_character" />
        ))}
      </div>
    </div>
  ));
  let weapon = talents.weapons[0].monday.map((item) => (
    <div className="talents">
      <div className="talent">
        <img src={item.image} alt="" className="image_talent" />
      </div>
      <div className="image_character">
        {item.weapon.map((i) => (
          <img src={i} alt="" className="image_talent_character" />
        ))}
      </div>
    </div>
  ));

  return (
    <div className="CurrentTalents">
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">таланты</a>
        <div className="calendarIcon">
          <BsBook />
        </div>
      </div>
      {talent}
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">предметы</a>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
      </div>
      {weapon}
    </div>
  );
}
