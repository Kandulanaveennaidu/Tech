import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AboutTechOptima from "./About/AboutTechOptima";
import Empoweringdigital from "./Home/Empoweringdigital"
import Casestudy1 from "./casestudy/casestudy1";
import Casestudy2 from "./casestudy/casestudy2";
import Casestudy3 from "./casestudy/casestudy3";
import Casestudy4 from "./casestudy/casestudy4";
import WhyOutSourceBpo from "./Bpo/WhyOutSourceBpo";
import OurService from "./Services/Ourservice";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Empoweringdigital />} />
        <Route path="/about" element={<AboutTechOptima />} />
        <Route path="/service" element={<OurService />} />
        <Route path="/casestudy1" element={<Casestudy1 />} />
        <Route path="/casestudy2" element={<Casestudy2 />} />
        <Route path="/casestudy3" element={<Casestudy3 />} />
        <Route path="/casestudy4" element={<Casestudy4 />} />
        <Route path="/BPO" element={<WhyOutSourceBpo />} />
      </Routes>
    </Router>
  );
}

export default App;