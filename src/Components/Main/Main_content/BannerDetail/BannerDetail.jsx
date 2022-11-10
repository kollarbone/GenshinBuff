import React from "react";
import { NavLink } from "react-router-dom";
import "./BannerDetail.css";

export default function BannerDetail(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="BannerDetail" onClick={props.onClose}>
      <div className="banner_modal" onClick={(e) => e.stopPropagation()}>
        <div className="banner_modal_img">
          <img
            src={props.banner.image}
            alt=""
            className="detail_image_banner"
          />
        </div>
        <div className="banner_modal_characters">
          {props.banner.characters.map((item) => (
            <NavLink
              to={"/character/" + item.name}
              style={{ textDecoration: "none" }}
            >
              <li className="detail_banner_name">
                <img src={item.image} alt="" className="detail_banner_image" />
                <span className="detail_banner_character_name">
                  {item.name}
                </span>
              </li>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
