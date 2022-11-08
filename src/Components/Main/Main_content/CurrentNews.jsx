import React from "react";
import "./MainContent.css";

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
  return (
    <div className="CurrentNews">
      <div className="headings">
        <span className="heading_1">Новости</span>
      </div>
      <div className="news">{news}</div>
    </div>
  );
}
