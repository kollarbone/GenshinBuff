import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Characters from "./Components/Characters/Characters";
import Character from "./Components/Characters/Character/Character";
import TierList from "./Components/TierList/TierList";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

export default function App(props) {
  const [theme, setTheme] = useState("dark");
  const [cookies, setCookie] = useCookies(["theme"]);
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    setCookie("theme", theme, { path: "/" });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={cookies.theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Header
            store={props.store}
            toggleTheme={toggleTheme}
            theme={cookies.theme}
            isDarkTheme={isDarkTheme}
          />
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
