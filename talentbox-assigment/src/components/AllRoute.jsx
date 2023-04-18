import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoute;
