import React, { Fragment } from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Report from "./Report";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./temperatures.scss";

export const App = () => (
  <Fragment>
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports/:scale" element={<Report />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </Fragment>
);

export default App;
