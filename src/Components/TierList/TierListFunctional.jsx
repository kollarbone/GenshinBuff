import React from "react";
import "./TierList.css";
import { NavLink, useLocation } from "react-router-dom";

export default function TierListFunctional(props) {
  let characterslist = props.characterslist;
  const usePathName = useLocation().pathname;
  let zerocharacters = [];

  if (usePathName === "/tier_list/" || usePathName === "/tier_list") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.level === props.level && (
          <div
            className="image_characters"
            style={{
              backgroundColor: item.color
            }}
          >
            <NavLink to={"/character/" + item.id}>
              <img src={item.image} alt="" className="image_character" />
            </NavLink>
            <div className="character_name">
              <NavLink className="character_name" to={"/character/" + item.id}>
                {item.name}
                {item.stars >= "0" && <> C{item.stars}</>}
              </NavLink>
            </div>
          </div>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/anemo") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "anemo" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/crio") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "crio" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/dendro") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "dendro" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/electro") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "electro" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/geo") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "geo" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/gidro") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "gidro" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  } else if (usePathName === "/tier_list/pyro") {
    zerocharacters = characterslist.map((item) => (
      <>
        {item.element === "pyro" && (
          <>
            {item.level === props.level && (
              <div
                className="image_characters"
                style={{ backgroundColor: item.color }}
              >
                <NavLink to={"/character/" + item.id}>
                  <img src={item.image} alt="" className="image_character" />
                </NavLink>
                <div className="character_name">
                  <NavLink
                    className="character_name"
                    to={"/character/" + item.id}
                  >
                    {item.name}
                  </NavLink>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ));
  }
  return <>{zerocharacters}</>;
}
