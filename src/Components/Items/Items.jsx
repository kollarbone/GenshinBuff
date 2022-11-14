import React from "react";
import "./Items.css";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import EnemyDropsClass from "./EnemyDrops/EnemyDropsClass";
import LocalSpecialtiesClass from "./LocalSpecialties/LocalSpecialtiesClass";

export default function Items(props) {
  return (
    <div className="Characters">
      <div className="items_header">
        <div className="items">
          <NavLink
            to="/items/enemy_drops"
            className="item"
            activeclassname="active"
          >
            Предметы с врагов
          </NavLink>
        </div>
        <div className="items">
          <NavLink
            to="/items/local_specialties"
            className="item"
            activeclassname="active"
          >
            Собираемые редметы
          </NavLink>
        </div>
      </div>
      <div className="characters">
        <Routes>
          <Route
            path="/enemy_drops"
            element={<EnemyDropsClass store={props.store} />}
          />
          <Route
            path="*"
            element={<Navigate to="/items/enemy_drops" replace />}
          />
          <Route
            path="/local_specialties"
            element={<LocalSpecialtiesClass store={props.store} />}
          />
        </Routes>
      </div>
    </div>
  );
}
