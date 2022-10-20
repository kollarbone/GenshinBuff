import React from "react";
import "./MainContent.css";
import { BsBook } from "react-icons/bs";
import { GiBroadsword } from "react-icons/gi";

export default function CurrentTalents(props) {
  return (
    <div className="CurrentTalents">
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">таланты</a>
        <div className="calendarIcon">
          <BsBook />
        </div>
      </div>
      <div className="headings">
        <a className="heading_1">Сегоднящние</a>
        <a className="heading_2">предметы</a>
        <div className="calendarIcon">
          <GiBroadsword />
        </div>
      </div>
    </div>
  );
}
