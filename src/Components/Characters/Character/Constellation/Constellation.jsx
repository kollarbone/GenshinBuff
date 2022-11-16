import React, { useState } from "react";
import "./Constellation.css";
import { HiChevronDown } from "react-icons/hi";

export default function Constellation(props) {
  const [isShow, setIsShow] = useState(true);
  const toggleShowHide = () => setIsShow(!isShow);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [burger_class, setBurgerClass] = useState("click_bar unclicked");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("click_bar clicked");
    } else {
      setBurgerClass("click_bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="Constellation">
      {props.constellation && (
        <>
          <div className="attack_header">
            <span className="heading_1">Character constellations</span>
            <div className={burger_class} onClick={toggleShowHide}>
              <HiChevronDown onClick={updateMenu} />
            </div>
          </div>
          {isShow && (
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
          )}
        </>
      )}
    </div>
  );
}
