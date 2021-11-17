import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.scss";
import { Link } from "react-router-dom";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";

const Main = () => {
  const [showData, setShowData] = useState(null);
  const [castMembers, setCastMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4?embed=cast")
      .then((response) => {
        setShowData(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(" https://api.tvmaze.com/shows/4/cast")
      .then((response) => {
        setCastMembers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (showData === null) return <h2>Still loading....</h2>;
  else
    return (
      <div className="main">
        <h2 className="main__title">{showData.name}</h2>
        <div className="main__details">Type: {showData.type}</div>
        <div className="main__details">Premiere Date: {showData.premiered}</div>
        <div className="main__details">Show Ended: {showData.ended}</div>
        <input
          type="text"
          className="main__input"
          placeholder="Find your favorite character"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="character">
          {castMembers
            .filter((actor) => {
              if (searchTerm === "") {
                return actor;
              } else if (
                actor.character.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return actor;
              }
            })
            .map((actor) => {
              return <CharacterCard actor={actor} />;
            })}
        </div>
      </div>
    );
};

export default Main;
