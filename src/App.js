import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Characters from "./Components/Characters/Characters";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
