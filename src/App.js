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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
