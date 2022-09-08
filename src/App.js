import React from "react";
import { Routes, Route} from "react-router-dom";
import { Items } from "./screens/Items/Items";
import { Categories } from "./screens/Categories/Categories";
export const App=()=>{
  return(<>
   <Routes>
        <Route path="/" element={<Items/>} />
        <Route path="Categories" element={<Categories/>} />
      </Routes>
  </>)
}