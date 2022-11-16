import React, { useState } from "react";
import "../MainContent.css";
import { BsCalendar4Event } from "react-icons/bs";
import BannerDetail from "../BannerDetail/BannerDetail";

export default function CurrentEvents(props) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  return (
    <div className="CurrentBanners">
      <div className="headings">
        <span className="heading_1">Current</span>
        <span className="heading_2">events</span>
        <div className="calendarIcon">
          <BsCalendar4Event />
        </div>
      </div>
      <div className="banners">
        {props.events.map((item) => (
          <div className="banner">
            {(item.imageUrl ===
              "https://uploadstatic-sea.mihoyo.com/contentweb/20210525/2021052517240446191.png" ||
              item.imageUrl ===
                "https://uploadstatic-sea.mihoyo.com/contentweb/20210512/2021051222525282025.png") && (
              <img
                src={item.imageUrl}
                alt=""
                className="image_banner"
                onClick={() => {
                  setShow(true);
                  setModalData(item);
                }}
              />
            )}
            <BannerDetail
              event={modalData}
              show={show}
              onClose={() => setShow(false)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
