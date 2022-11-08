import React from "react";
import "./MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";

export default function CurrentBanners(props) {
  let banners = props.banners.map((item) => (
    <div className="banner">
      <img src={item.image} alt="" className="image_banner" />
    </div>
  ));
  return (
    <div className="CurrentBanners">
      <div className="headings">
        <span className="heading_1">Текущие</span>
        <span className="heading_2">баннеры</span>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="banners">{banners}</div>
    </div>
  );
}
