import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Characters from "./Components/Characters/Characters";
import Character from "./Components/Characters/Character/Character";
import TierList from "./Components/TierList/TierList";

export default function App(props) {
  document.body.style.backgroundColor = "#232939";
  return (
    <BrowserRouter>
      <div className="App">
        <Header store={props.store} />
        <div className="mainContent">
          <Routes>
            <Route path="/main/*" element={<Main store={props.store} />} />
            <Route path="/" element={<Main store={props.store} />} />
            <Route
              path="/characters/*"
              element={<Characters store={props.store} />}
            />
            <Route
              path="/character/:character_id"
              element={<Character store={props.store} />}
            />
            <Route
              path="/tier_list/*"
              element={<TierList store={props.store} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
