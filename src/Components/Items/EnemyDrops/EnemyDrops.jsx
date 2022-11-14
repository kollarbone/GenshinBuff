import React, { useState } from "react";
import "./EnemyDrops.css";
import { NavLink } from "react-router-dom";
import Details from "./Details";

export default function EnemyDrops(props) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="AllCharacters">
      {props.items.map((item) => (
        <>
          <div className="image_item">
            <div className="weapon_img">
              <img
                src={item.iconUrl}
                alt=""
                className="image_character"
                onClick={() => {
                  setShow(true);
                  setModalData(item);
                }}
              />
            </div>
          </div>
          <Details
            item={modalData}
            show={show}
            onClose={() => setShow(false)}
          />
        </>
      ))}
    </div>
  );
}
