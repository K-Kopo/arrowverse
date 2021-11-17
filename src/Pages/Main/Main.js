import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.scss";

const Main = () => {
  const [showData, setShowData] = useState([]);
  const [castMembers, setCastMembers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4?embed=cast")
      .then((response) => {
        setShowData(response.data);
      })
      .catch((error) => console.log(error));

      axios 
      .get(' https://api.tvmaze.com/shows/4/cast')
      .then((response)=>{
          setCastMembers(response.data);
      })
      .catch((error) => console.log(error));

  }, []);

  if (!showData) return <h2>Still loading....</h2>;
  else 
  return (
    <div className="main">
        <h2>{showData.name}</h2> 
        <div>Type: {showData.type}</div>
        <div>Premiere Date: {showData.premiered}</div>
        <div>Show Ended: {showData.ended}</div>
        <div className="character">
            {castMembers.map((actor)=> {
                return (
                    <article >
                    <div className="character__card">
                <div key={actor.character.id}>{actor.character.name}</div>
                <div>{actor.person.name}</div>
                </div>
                </article>
                )
            })}
        </div>
    </div>
  );
};

export default Main;
