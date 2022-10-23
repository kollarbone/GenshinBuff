import React from "react";
import "./Main.css";
import BannerSlider from "./BannerSlider/BannerSlider";
import CurrentBanners from "./Main_content/CurrentBanners";
import CurrentEvents from "./Main_content/CurrentEvents";
import CurrentTalents from "./Main_content/CurrentTalents";
import CurrentNews from "./Main_content/CurrentNews";
import OurSocialNetworks from "./Main_content/OurSocialNetworks";

export default function Main(props) {
  let banners_corusel = props.store.getState().main.banner_data;
  let events = props.store.getState().main.events;
  let banners = props.store.getState().main.banners;
  let talents = props.store.getState().main.talents;
  let weapons = props.store.getState().main.weapons;

  return (
    <div className="Main">
      <div className="banner_block">
        <BannerSlider banners={banners_corusel} />
      </div>
      <div className="main_content">
        <div className="current_events">
          <CurrentEvents events={events} />
        </div>
        <div className="current_banners">
          <CurrentBanners banners={banners} />
        </div>
        <div className="current_talents">
          <CurrentTalents talents={talents} weapons={weapons} />
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
