import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./People.css";

const People = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return (
    <div className="mainContainer">
      {data && (
        <div>
          <h5>Name: {data.name}</h5>
          <h5>Gender: {data.gender}</h5>
          <h5>Height: {data.height}</h5>
          <h5>Skin Color: {data.skin_color}</h5>
        </div>
      )}
    </div>
  );
};

export default People;
