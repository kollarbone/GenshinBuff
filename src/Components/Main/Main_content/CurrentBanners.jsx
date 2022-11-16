import React, { useState } from "react";
import "./MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";
import BannerDetail from "./BannerDetail/BannerDetail";

export default function CurrentBanners(props) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  return (
    <div className="CurrentBanners">
      <div className="headings">
        <span className="heading_1">Current</span>
        <span className="heading_2">banners</span>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="banners">
        {props.banners.map((item) => (
          <div className="banner">
            <img
              src={item.image}
              alt=""
              className="image_banner"
              onClick={() => {
                setShow(true);
                setModalData(item);
              }}
            />
            <BannerDetail
              banner={modalData}
              show={show}
              onClose={() => setShow(false)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
