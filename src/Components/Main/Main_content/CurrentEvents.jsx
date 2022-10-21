import React from "react";
import "./MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";

export default function CurrentEvents(props) {
  return (
    <div className="CurrentEvents">
      <div className="headings">
        <a className="heading_1">Текущие</a>
        <a className="heading_2">ивенты</a>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="events">
        <div className="event">
          <img
            src="https://i.ytimg.com/vi/ykBGw9qo41c/maxresdefault.jpg"
            alt=""
            className="image_event"
          />
        </div>
        <div className="event">
          <img
            src="https://img2.wtftime.ru/store/2022/03/16/nCE8384s.jpg"
            alt=""
            className="image_event"
          />
        </div>
      </div>
    </div>
  );
}
