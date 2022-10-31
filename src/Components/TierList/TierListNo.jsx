import React from "react";
import "./TierList.css";
import TierListFunctional from "./TierListFunctional";

export default function TierListNo(props) {
  let characterslist = props.characterslist;

  return (
    <div className="tierlist_characters_table">
      <div className="name_of_column">
        <span className="heading_7">DPS</span>
        <span className="heading_7">Sub DPS</span>
        <span className="heading_7">Support</span>
      </div>
      <div className="tierlist_SS">
        <span className="heading_6">S+</span>
        <div className="table_tierlist">
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.SS.dps}
              level="SS"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.SS.sub}
              level="SS"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.SS.sup}
              level="SS"
            />
          </div>
        </div>
      </div>
      <div className="tierlist_S">
        <span className="heading_6">S</span>
        <div className="table_tierlist">
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.S.dps}
              level="S"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.S.sub}
              level="S"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.S.sup}
              level="S"
            />
          </div>
        </div>
      </div>
      <div className="tierlist_A">
        <span className="heading_6">A</span>
        <div className="table_tierlist">
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.A.dps}
              level="A"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.A.sub}
              level="A"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.A.sup}
              level="A"
            />
          </div>
        </div>
      </div>
      <div className="tierlist_B">
        <span className="heading_6">B</span>
        <div className="table_tierlist">
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.B.dps}
              level="B"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.B.sub}
              level="B"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.B.sup}
              level="B"
            />
          </div>
        </div>
      </div>
      <div className="tierlist_C">
        <span className="heading_6">C</span>
        <div className="table_tierlist">
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.C.dps}
              level="C"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.C.sub}
              level="C"
            />
          </div>
          <div className="characters_list">
            <TierListFunctional
              characterslist={characterslist.C.sup}
              level="C"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
