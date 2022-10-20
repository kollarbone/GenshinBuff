import React from "react";
import "./Main.css";
import BannerSlider from "./BannerSlider/BannerSlider";
import CurrentBanners from "./Main_content/CurrentBanners";
import CurrentEvents from "./Main_content/CurrentEvents";
import CurrentTalents from "./Main_content/CurrentTalents";
import CurrentNews from "./Main_content/CurrentNews";
import OurSocialNetworks from "./Main_content/OurSocialNetworks";

export default function Main(props) {
  return (
    <div className="Main">
      <div className="banner_block">
        <BannerSlider />
      </div>
      <div className="main_content">
        <div className="current_events">
          <CurrentEvents />
        </div>
        <div className="current_banners">
          <CurrentBanners />
        </div>
        <div className="current_talents">
          <CurrentTalents />
        </div>
        <div className="current_news">
          <CurrentNews />
        </div>
        <div className="our_social_networks">
          <OurSocialNetworks />
        </div>
      </div>
    </div>
  );
}
