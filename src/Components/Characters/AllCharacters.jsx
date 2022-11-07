import React from "react";
import "./Characters.css";
import { useLocation, NavLink } from "react-router-dom";

export default function AllCharacters(props) {
  const usePathName = useLocation().pathname;
  let characters = [];

  if (usePathName === "/characters/" || usePathName === "/characters") {
    characters = props.characters.map((item) => (
      <div
        className="image_characters"
        style={
          item.rarity === 5
            ? { backgroundColor: "#ad7819" }
            : { backgroundColor: "#2d3548" }
        }
      >
        <NavLink to={"/character/" + item.name}>
          <img src={item.iconURL} alt="" className="image_character" />
        </NavLink>
        <div className="character_name">
          <NavLink className="character_name" to={"/character/" + item.name}>
            {item.name}
          </NavLink>
        </div>
      </div>
    ));
  } else if (usePathName === "/characters/anemo") {
    characters = props.characters.map((item) => (
      <>
        {item.element === "Anemo" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Cryo" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Dendro" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Electro" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Geo" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Hydro" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
        {item.element === "Pyro" && (
          <div
            className="image_characters"
            style={
              item.rarity === 5
                ? { backgroundColor: "#ad7819" }
                : { backgroundColor: "#2d3548" }
            }
          >
            <NavLink to={"/character/" + item.name}>
              <img src={item.iconURL} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink
                className="character_name"
                to={"/character/" + item.name}
              >
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
