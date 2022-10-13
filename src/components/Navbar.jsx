import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const idHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <nav className="nav">
      <h3>Search For:</h3>
      <select onChange={categoryChangeHandler}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <h3 className="idHeader">ID:</h3>
      <input onChange={idHandler} type="number" />
      <button onClick={submitHandler}>Search</button>
    </nav>
  );
};

export default Navbar;
