import store from "./Redux/redux-store";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </Provider>
  </React.StrictMode>
);
