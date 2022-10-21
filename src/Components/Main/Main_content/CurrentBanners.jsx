import React from "react";
import "./MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";

export default function CurrentBanners(props) {
  return (
    <div className="CurrentBanners">
      <div className="headings">
        <a className="heading_1">Текущие</a>{" "}
        <a className="heading_2">баннеры</a>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="banners">
        <div className="banner">
          <img
            src="https://genshin.ru/wp-content/uploads/2021/06/banner_kadzuha_2.jpg"
            alt=""
            className="image_banner"
          />
        </div>
        <div className="banner">
          <img
            src="https://i.ytimg.com/vi/iwN6CBcnHSU/maxresdefault.jpg?7857057827"
            alt=""
            className="image_banner"
          />
        </div>
      </div>
    </div>
  );
}
