import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import { Provider } from "react-redux";
import { store } from "./components/store/Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
