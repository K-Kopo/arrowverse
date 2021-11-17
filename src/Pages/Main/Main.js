import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Main.scss";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import { CSVLink } from "react-csv";

const Main = () => {
  const [showData, setShowData] = useState(null);
  const [castMembers, setCastMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const newArray = [];
  castMembers.map((person) => newArray.push(person.person));

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
        <CSVLink
          className="main__csvlink"
          filename="arrow-cast-members"
          data={newArray}
        >
          Download Cast Members as CSV
        </CSVLink>
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
              return <CharacterCard key={actor.id} actor={actor} />;
            })}
        </div>
      </div>
    );
};

export default Main;
