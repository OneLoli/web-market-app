import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./modules/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import articlesReducer from "./store/articlesSlice";

var store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
