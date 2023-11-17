import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Responsive } from "../pages/Responsive";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/responsive" element={<Responsive />} />
      </Routes>
    </BrowserRouter>
  );
};
