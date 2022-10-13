import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h3>Search For:</h3>
      <select>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <h3 className="idHeader">ID:</h3>
      <input type="number" />
      <button>Search</button>
    </nav>
  );
};

export default Navbar;
