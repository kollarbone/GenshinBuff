import React, { useState } from "react";
import "../MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";

export default function CurrentTalents(props) {
  const [isShow, setIsShow] = useState(true);
  const [isShow_1, setIsShow_1] = useState(true);
  const toggleShowHide = () => setIsShow(!isShow);
  const toggleShowHide_1 = () => setIsShow_1(!isShow_1);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMenuClicked_1, setIsMenuClicked_1] = useState(false);
  const [burger_class, setBurgerClass] = useState("click_bar unclicked");
  const [burger_class_1, setBurgerClass_1] = useState("click_bar_1 unclicked");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("click_bar clicked");
    } else {
      setBurgerClass("click_bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  const updateMenu_1 = () => {
    if (!isMenuClicked_1) {
      setBurgerClass_1("click_bar_1 clicked");
    } else {
      setBurgerClass_1("click_bar_1 unclicked");
    }
    setIsMenuClicked_1(!isMenuClicked_1);
  };

  return (
    <div className="CurrentBanners">
      <div className="headings">
        <span className="heading_1">Today</span>
        <span className="heading_2">talents</span>
        <div className="calendarIcon">
          <BsBook />
        </div>
        <div className={burger_class} onClick={toggleShowHide}>
          <HiChevronDown onClick={updateMenu} />
        </div>
      </div>
      {isShow && (
        <>
          {props.talents.map((item) => (
            <div className="talents">
              <div className="talent">
                <img src={item.iconUrl} alt="" className="image_talent" />
              </div>
              <div className="image_character">
                {item.characters.map((i) => (
                  <NavLink to={"/character/" + i.name}>
                    <img
                      src={i.iconURL}
                      alt=""
                      className="image_talent_character"
                      style={
                        i.rarity === 5 ? { backgroundColor: "#ad7819" } : {}
                      }
                    />
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
      <div className="headings">
        <span className="heading_1">Today</span>
        <span className="heading_2">materials</span>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
        <div className={burger_class_1} onClick={toggleShowHide_1}>
          <HiChevronDown onClick={updateMenu_1} />
        </div>
      </div>
      {isShow_1 && (
        <>
          {props.weapons.map((item) => (
            <div className="talents">
              <div className="talent">
                <img src={item.iconUrl} alt="" className="image_talent" />
              </div>
              {item.weapons && (
                <div className="image_character">
                  {item.weapons.map((i) => (
                    <NavLink to={"/weapon/" + i.name}>
                      <img
                        src={i.iconUrl}
                        alt=""
                        className="image_talent_character"
                      />
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
