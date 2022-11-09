import React, { useState } from "react";
import "./MainContent.css";
import { HiChevronDown } from "react-icons/hi";

export default function CurrentNews(props) {
  let news = props.news.map((item) => (
    <div className="new">
      <img src={item.image} alt="" className="image_news" />
      <div className="news_info">
        <div className="news_name">{item.name}</div>
        <div className="news_date">{item.date}</div>
        <div className="news_description">{item.description}</div>
      </div>
    </div>
  ));
  const [isShow, setIsShow] = useState(true);
  const toggleShowHide = () => setIsShow(!isShow);

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [burger_class, setBurgerClass] = useState("click_bar unclicked");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("click_bar clicked");
    } else {
      setBurgerClass("click_bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="CurrentNews">
      <div className="headings">
        <span className="heading_1">Новости</span>
        <div className={burger_class} onClick={toggleShowHide}>
          <HiChevronDown onClick={updateMenu} />
        </div>
      </div>
      {isShow && <div className="news">{news}</div>}
    </div>
  );
}
