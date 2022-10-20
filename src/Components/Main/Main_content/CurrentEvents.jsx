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
    </div>
  );
}
