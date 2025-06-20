import React, { Fragment } from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./temperatures.scss";

export const App = () => (
  <Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </Fragment>
);

export default App;
