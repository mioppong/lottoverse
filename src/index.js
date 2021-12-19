import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<App />} />
      <Route path="/contestants" element={<App />} /> */}
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
