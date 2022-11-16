import React from "react";
import "./MainContent.css";
import { FaDiscord } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
export default function OurSocialNetworks(props) {
  return (
    <div className="CurrentBanners">
      <div className="headings">
        <span className="heading_1">Social networks</span>
      </div>
      <div className="socials">
        <div className="social_dis">
          <FaDiscord />
        </div>
        <div className="social_tg">
          <BsTelegram />
        </div>
      </div>
    </div>
  );
}
