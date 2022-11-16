import React from "react";
import "./Main.css";
import BannerSlider from "./BannerSlider/BannerSlider";
import CurrentBanners from "./Main_content/CurrentBanners";
import CurrentEventsClass from "./Main_content/CurrentEvents/CurrentEventsClass";
import CurrentTalentsClass from "./Main_content/CurrentTalents/CurrentTalentsClass";
import CurrentNews from "./Main_content/CurrentNews";
import OurSocialNetworks from "./Main_content/OurSocialNetworks";

export default function Main(props) {
  let banners_corusel = props.store.getState().main.banner_data;
  let news = props.store.getState().main.news;
  let banners = props.store.getState().main.banners;

  return (
    <div className="Main">
      <div className="banner_block">
        <BannerSlider banners={banners_corusel} />
      </div>
      <div className="main_content">
        <div className="block_main">
          <div className="block_images">
            <div className="current_events">
              <CurrentEventsClass />
            </div>
            <div className="current_events">
              <CurrentBanners banners={banners} />
            </div>
          </div>
          <div className="current_news">
            <CurrentNews news={news} />
          </div>
        </div>
        <div className="block_items">
          <div className="current_talents">
            <CurrentTalentsClass />
          </div>
          <div className="our_social_networks">
            <OurSocialNetworks />
          </div>
        </div>
      </div>
    </div>
  );
}
