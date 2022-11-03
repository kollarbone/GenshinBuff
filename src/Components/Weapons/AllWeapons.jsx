import React from "react";
import "./Weapons.css";
import { useLocation, NavLink } from "react-router-dom";

export default function AllWeapons(props) {
  const usePathName = useLocation().pathname;
  let weapons = [];
  if (usePathName === "/weapons/" || usePathName === "/weapons") {
    weapons = props.weapons.map((item) => (
      <div className="image_characters" style={{ backgroundColor: item.color }}>
        <NavLink to={"/weapon/" + item.id}>
          <img src={item.image} alt="" className="image_character" />
        </NavLink>
        <div className="character_name">
          <NavLink className="character_name" to={"/weapon/" + item.id}>
            {item.name}
          </NavLink>
        </div>
      </div>
    ));
  } else if (usePathName === "/weapons/sword") {
    weapons = props.weapons.map((item) => (
      <>
        {item.type === "sword" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/weapon/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/weapon/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/bow") {
    weapons = props.weapons.map((item) => (
      <>
        {item.type === "bow" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/weapon/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/weapon/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/big_sword") {
    weapons = props.weapons.map((item) => (
      <>
        {item.type === "big_sword" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/weapon/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/weapon/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/catalyst") {
    weapons = props.weapons.map((item) => (
      <>
        {item.type === "catalyst" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/weapon/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/weapon/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/spear") {
    weapons = props.weapons.map((item) => (
      <>
        {item.type === "spear" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/weapon/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/weapon/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  }
  return <div className="AllCharacters">{weapons}</div>;
}
