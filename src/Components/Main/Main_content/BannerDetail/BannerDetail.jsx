import React from "react";
import { NavLink } from "react-router-dom";
import "./BannerDetail.css";

export default function BannerDetail(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className={props.banner ? "BannerDetail" : "EventDetail"}
      onClick={props.onClose}
    >
      <div className="banner_modal" onClick={(e) => e.stopPropagation()}>
        <div className="banner_modal_main">
          <div className="banner_modal_img">
            {props.banner && (
              <img
                src={props.banner.image}
                alt=""
                className="detail_image_banner"
              />
            )}
            {props.event && (
              <img
                src={props.event.imageUrl}
                alt=""
                className="detail_image_banner"
              />
            )}
          </div>
          <div className="banner_modal_characters">
            {props.banner &&
              props.banner.characters.map((item) => (
                <NavLink
                  to={"/character/" + item.name}
                  style={{ textDecoration: "none" }}
                >
                  <li className="detail_banner_name">
                    <img
                      src={item.image}
                      alt=""
                      className="detail_banner_image"
                    />
                    <span className="detail_banner_character_name">
                      {item.name}
                    </span>
                  </li>
                </NavLink>
              ))}
            {props.event &&
              props.event.rewards.map((item) => (
                <li className="detail_event_name">
                  <img
                    src={item.iconUrl}
                    alt=""
                    className="detail_event_image"
                  />
                  <span className="detail_event_revard_name">
                    {item.name}({item.count && item.count})
                  </span>
                </li>
              ))}
          </div>
        </div>
        {props.event && (
          <div>
            <span className="detail_event_name">{props.event.eligibility}</span>
            <span className="detail_event_name">{props.event.description}</span>
          </div>
        )}
      </div>
    </div>
  );
}
