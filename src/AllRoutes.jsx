import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./Component/Books";
import Forms from "./Component/Forms";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/FEWD-CA-5" element={<Books />}></Route>
        <Route path="/reg" element={<Forms />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
