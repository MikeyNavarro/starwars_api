import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import People from "./components/People";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </div>
  );
};

export default App;
