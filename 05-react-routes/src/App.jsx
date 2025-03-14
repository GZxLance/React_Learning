import React from "react";

import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
