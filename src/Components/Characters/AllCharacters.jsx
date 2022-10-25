import React from "react";
import "./Characters.css";
import { useLocation, NavLink } from "react-router-dom";

export default function AllCharacters(props) {
  const usePathName = useLocation().pathname;
  let characters = [];
  if (usePathName === "/characters/" || usePathName === "/characters") {
    characters = props.characters.map((item) => (
      <div className="image_characters" style={{ backgroundColor: item.color }}>
        <NavLink to={"/character/" + item.id}>
          <img src={item.image} alt="" className="image_character" />
        </NavLink>
        <div className="character_name">
          <NavLink className="character_name" to={"/character/" + item.id}>
            {item.name}
          </NavLink>
        </div>
      </div>
    ));
  } else if (usePathName === "/characters/anemo") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "anemo" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/crio") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "crio" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/dendro") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "dendro" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/electro") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "electro" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/geo") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "geo" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/gidro") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "gidro" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/characters/pyro") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "pyro" && (
          <div
            className="image_characters"
            style={{ backgroundColor: item.color }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  }
  return <div className="AllCharacters">{characters}</div>;
}
