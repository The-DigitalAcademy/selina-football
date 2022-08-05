import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import Loader from "react-loader-spinner";


const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="leagues-container">
      {data?.map((data) => (
        <div key={data.id} className="league-div">
          <img src={data.logos.light} alt="#" />
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Leagues;      
       
         

