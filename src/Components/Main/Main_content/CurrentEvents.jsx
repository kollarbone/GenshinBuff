import React from "react";
import "./MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";

export default function CurrentEvents(props) {
  let events = props.events.map((item) => (
    <div className="event">
      <img src={item.image} alt="" className="image_event" />
    </div>
  ));
  return (
    <div className="CurrentEvents">
      <div className="headings">
        <span className="heading_1">Текущие</span>
        <span className="heading_2">ивенты</span>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="events">{events}</div>
    </div>
  );
}
