import React from "react";
import "./Weapons.css";
import { useLocation, NavLink } from "react-router-dom";

export default function AllWeapons(props) {
  const usePathName = useLocation().pathname;
  let weapons = [];

  if (usePathName === "/weapons/" || usePathName === "/weapons") {
    weapons = props.weapons.map((item) => (
      <div className="image_weapon">
        <div className="weapon_img">
          <NavLink to={"/weapon/" + item.name}>
            <img src={item.iconUrl} alt="" className="image_character" />
          </NavLink>
        </div>
        <div className="weapon_name">
          <NavLink className="character_name" to={"/weapon/" + item.name}>
            {item.name}
          </NavLink>
        </div>
      </div>
    ));
  } else if (usePathName === "/weapons/Sword") {
    weapons = props.weapons.map((item) => (
      <>
        {item.weaponType === "Sword" && (
          <div className="image_weapon">
            <div className="weapon_img">
              <NavLink to={"/weapon/" + item.name}>
                <img src={item.iconUrl} alt="" className="image_character" />
              </NavLink>
            </div>
            <div className="weapon_name">
              <NavLink className="weapon_name" to={"/weapon/" + item.name}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/Bow") {
    weapons = props.weapons.map((item) => (
      <>
        {item.weaponType === "Bow" && (
          <div className="image_weapon">
            <div className="weapon_img">
              <NavLink to={"/weapon/" + item.name}>
                <img src={item.iconUrl} alt="" className="image_character" />
              </NavLink>
            </div>
            <div className="weapon_name">
              <NavLink className="character_name" to={"/weapon/" + item.name}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/Claymore") {
    weapons = props.weapons.map((item) => (
      <>
        {item.weaponType === "Claymore" && (
          <div className="image_weapon">
            <div className="weapon_img">
              <NavLink to={"/weapon/" + item.name}>
                <img src={item.iconUrl} alt="" className="image_character" />
              </NavLink>
            </div>
            <div className="weapon_name">
              <NavLink className="character_name" to={"/weapon/" + item.name}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/Catalyst") {
    weapons = props.weapons.map((item) => (
      <>
        {item.weaponType === "Catalyst" && (
          <div className="image_weapon">
            <div className="weapon_img">
              <NavLink to={"/weapon/" + item.name}>
                <img src={item.iconUrl} alt="" className="image_character" />
              </NavLink>
            </div>
            <div className="weapon_name">
              <NavLink className="character_name" to={"/weapon/" + item.name}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/weapons/Polearm") {
    weapons = props.weapons.map((item) => (
      <>
        {item.weaponType === "Polearm" && (
          <div className="image_weapon">
            <div className="weapon_img">
              <NavLink to={"/weapon/" + item.name}>
                <img src={item.iconUrl} alt="" className="image_character" />
              </NavLink>
            </div>
            <div className="weapon_name">
              <NavLink className="character_name" to={"/weapon/" + item.name}>
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
