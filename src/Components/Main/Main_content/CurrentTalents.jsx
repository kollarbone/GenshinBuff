import React from "react";
import "./MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function CurrentTalents(talents) {
  let date = new Date();
  let weapon = [];
  let talent = [];

  if (date.getDay() === 0) {
    talent = talents.talents[0].sunday.map((item) => (
      <img src={item} alt="" className="image_talent" />
    ));
    weapon = talents.weapons[0].sunday.map((item) => (
      <img src={item} alt="" className="image_talent" />
    ));
  } else if (date.getDay() === 1 || date.getDay() === 4) {
    talent = talents.talents[0].monday.map((item) => (
      <div className="talents">
        <div className="talent">
          <img src={item.image} alt="" className="image_talent" />
        </div>
        <div className="image_character">
          {item.characters.map((i) => (
            <NavLink to={"/character/" + i.id}>
              <img src={i.image} alt="" className="image_talent_character" />
            </NavLink>
          ))}
        </div>
      </div>
    ));
    weapon = talents.weapons[0].monday.map((item) => (
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
  } else if (date.getDay() === 2 || date.getDay() === 5) {
    talent = talents.talents[0].tuesday.map((item) => (
      <div className="talents">
        <div className="talent">
          <img src={item.image} alt="" className="image_talent" />
        </div>
        <div className="image_character">
          {item.characters.map((i) => (
            <NavLink to={"/character/" + i.id}>
              <img src={i.image} alt="" className="image_talent_character" />
            </NavLink>
          ))}
        </div>
      </div>
    ));
    weapon = talents.weapons[0].tuesday.map((item) => (
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
  } else if (date.getDay() === 3 || date.getDay() === 6) {
    talent = talents.talents[0].wednesday.map((item) => (
      <div className="talents">
        <div className="talent">
          <img src={item.image} alt="" className="image_talent" />
        </div>
        <div className="image_character">
          {item.characters.map((i) => (
            <NavLink to={"/character/" + i.id}>
              <img src={i.image} alt="" className="image_talent_character" />
            </NavLink>
          ))}
        </div>
      </div>
    ));
    weapon = talents.weapons[0].wednesday.map((item) => (
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
  }

  return (
    <div className="CurrentTalents">
      <div className="headings">
        <a className="heading_1">Таланты</a>
        <a className="heading_2">сегодня</a>
        <div className="calendarIcon">
          <BsBook />
        </div>
      </div>
      {date.getDay() === 0 ? (
        <>
          <div className="talents_all">Сегодня доступны все таланты</div>
          <div className="image_all_talent">{talent}</div>
        </>
      ) : (
        <>{talent}</>
      )}

      <div className="headings">
        <a className="heading_1">Предметы</a>
        <a className="heading_2">сегодня</a>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
      </div>
      {date.getDay() === 0 ? (
        <>
          <div className="talents_all">Сегодня доступны все предметы</div>
          <div className="image_all_talent">{weapon}</div>
        </>
      ) : (
        <>{weapon}</>
      )}
    </div>
  );
}
