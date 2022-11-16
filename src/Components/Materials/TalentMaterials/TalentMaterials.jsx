import React, { useState } from "react";
import Details from "../../Items/EnemyDrops/Details";

export default function TalentMaterials(props) {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="AllCharacters">
      {props.talent.map((item, index) => (
        <div className="list_details_items">
          <div className="image_item">
            <div className="weapon_img">
              <img
                key={index}
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
          {modalData && item.iconUrl === modalData.iconUrl && (
            <Details
              item={modalData}
              show={show}
              onClose={() => setShow(false)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
