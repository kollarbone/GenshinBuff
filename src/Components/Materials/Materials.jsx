import React from "react";
import "./Materials.css";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import TalentMaterialsClass from "./TalentMaterials/TalentMaterialsClass";
import AscensionMaterialClass from "./AscensionMaterial/AscensionMaterialClass";
import TalentBookClass from "./TalentBook/TalentBookClass";

export default function Materials(props) {
  return (
    <div className="Characters">
      <div className="items_header">
        <div className="items">
          <NavLink
            to="/materials/talent_materials"
            className="item"
            activeclassname="active"
          >
            Материалы для талантов
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/materials/talent_book"
            className="item"
            activeclassname="active"
          >
            Книги талантов
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/materials/ascension_material"
            className="item"
            activeclassname="active"
          >
            Предметы для оружия
          </NavLink>
        </div>
      </div>
      <div className="characters">
        <Routes>
          <Route
            path="/talent_materials"
            element={<TalentMaterialsClass store={props.store} />}
          />
          <Route
            path="*"
            element={<Navigate to="/materials/talent_materials" replace />}
          />
          <Route
            path="/ascension_material"
            element={<AscensionMaterialClass store={props.store} />}
          />
          <Route
            path="/talent_book"
            element={<TalentBookClass store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
}
