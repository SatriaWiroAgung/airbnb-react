import React from "react";
import "./App.css";
import ReactCoursePage from "./features/reactcourse/ReactCoursePage";
import BusinessCardPage from "./features/businesscard/BusinessCardPage";
import AirBnbPage from "./features/airbnb/AirBnbPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Routes>
          {/* <Route path="/" element={<AirBnbPage />} /> */}
          <Route path="/" element={<BusinessCardPage />} />
          <Route path="/airbnb" element={<AirBnbPage />} />
        </Routes>
    </div>
  );
};

export default App;
