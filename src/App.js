import React from "react";
import { Routes, Route } from "react-router-dom";
import { Items } from "screens/items";
import { Categories } from "screens/categories";
export const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>;
};

