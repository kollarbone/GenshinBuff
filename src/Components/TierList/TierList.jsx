import React from "react";
import "./TierList.css";
import anemo from "../Images/Elements/anemo.png";
import crio from "../Images/Elements/crio.png";
import dendro from "../Images/Elements/dendro.png";
import electro from "../Images/Elements/electro.png";
import geo from "../Images/Elements/geo.png";
import gidro from "../Images/Elements/gidro.png";
import pyro from "../Images/Elements/pyro.png";
import delete_element from "../Images/Elements/delete.png";
import { NavLink } from "react-router-dom";

export default function TierList(props) {
  let characterslist = props.store.getState().tierlist.characters;

  return (
    <div className="TierList">
      <div className="characters_header">
        <a>Тир лист персонажей Genshin Impact</a>
        <input className="input" type="text" placeholder="Поиск.." />
      </div>
      <div className="character_element">
        <NavLink
          to="/tier_list/anemo"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={anemo} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/crio"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={crio} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/dendro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={dendro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/electro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={electro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/geo"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={geo} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/gidro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={gidro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/pyro"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img src={pyro} alt="" className="image_character_element" />
        </NavLink>
        <NavLink
          to="/tier_list/"
          className="image_character_elements"
          activeclassname="active_element"
        >
          <img
            src={delete_element}
            alt=""
            className="delete_character_element"
          />
        </NavLink>
      </div>
      <div className="TierList_characters">
        <div className="tierlist_stars">
          <span className="heading_1">Рейтинг персонажей</span>
          <span className="heading_2">С0</span>
          <div className="tierlist_characters_table">
            <div className="name_of_column">
              <span className="heading_6">DPS</span>
              <span className="heading_6">Sub DPS</span>
              <span className="heading_6">Support</span>
            </div>
            <div className="tierlist_SS">
              <span className="heading_6">S+</span>
              <div className="table_tierlist">
                <div className="characters_list">1</div>
                <div className="characters_list">2</div>
                <div className="characters_list">3</div>
              </div>
            </div>
            <div className="tierlist_S">
              <span className="heading_6">S</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_A">
              <span className="heading_6">A</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_B">
              <span className="heading_6">B</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_C">
              <span className="heading_6">C</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
          </div>
        </div>
        <div className="tierlist_stars">
          <span className="heading_1">Рейтинг персонажей</span>
          <span className="heading_2">C0+</span>
          <div className="tierlist_characters_table">
            <div className="name_of_column">
              <span className="heading_6">DPS</span>
              <span className="heading_6">Sub DPS</span>
              <span className="heading_6">Support</span>
            </div>
            <div className="tierlist_SS">
              <span className="heading_6">S+</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_S">
              <span className="heading_6">S</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_A">
              <span className="heading_6">A</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_B">
              <span className="heading_6">B</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_C">
              <span className="heading_6">C</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
          </div>
        </div>
        <div className="tierlist_stars">
          <span className="heading_1">Рейтинг персонажей</span>
          <span className="heading_2">C6</span>
          <div className="tierlist_characters_table">
            <div className="name_of_column">
              <span className="heading_6">DPS</span>
              <span className="heading_6">Sub DPS</span>
              <span className="heading_6">Support</span>
            </div>
            <div className="tierlist_SS">
              <span className="heading_6">S+</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_S">
              <span className="heading_6">S</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_A">
              <span className="heading_6">A</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_B">
              <span className="heading_6">B</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
            <div className="tierlist_C">
              <span className="heading_6">C</span>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
              <div className="characters_list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
