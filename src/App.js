import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./temperatures.scss";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
