import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hospital from "./pages/Hospital.js";
import Shelter from "./pages/Shelter.js";
import Restaurant from "./pages/Restaurant.js";
import Facility from "./pages/Facility.js";
import Explore from "./pages/Explore.js";
import "./App.css";

const App = () => {
  const [filter, setFilter] = useState("all");

  return (
      <div className="layout">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<div>홈페이지입니다!</div>} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/shelter" element={<Shelter />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
       </div>
      </div>
  );
};

export default App;
