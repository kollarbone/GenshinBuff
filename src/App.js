import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header store={props.store} />
        <div className="mainContent">
          <Routes>
            <Route path="/main/*" element={<Main store={props.store} />} />
            <Route path="/" element={<Main store={props.store} />} />
            {/* <Route
            path="/characters/*"
            element={<Characters theme={cookies.theme} store={props.store} />}
          >
            <Route
              path="/squads/*"
              element={<Squads theme={cookies.theme} store={props.store} />}
            />
          </Route>
          <Route
            path="/tier_list/*"
            element={<Tier_list theme={cookies.theme} store={props.store} />}
          />
          <Route
            path="/map/*"
            element={<Map theme={cookies.theme} store={props.store} />}
          />
          <Route
            path="/viki/*"
            element={<Viki theme={cookies.theme} store={props.store} />}
          />
          <Route
            path="/community/*"
            element={<Сommunity theme={cookies.theme} store={props.store} />}
          /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
