import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Episodes.scss";

const Episodes = () => {
  const [episodeData, setEpisodeData] = useState(null);
  const [season, setSeason] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows/4/episodes")
      .then((response) => {
        setEpisodeData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (episodeData === null) return <h2>Still loading....</h2>;

  return (
    <div className="episode-page">
      <label className="episode-selector__label" for="episode-select">Pick a season</label>

      <select
        className="episode-selector"
        name="episodes"
        id="episode-select"
        onChange={(event) => setSeason(event.target.value)}
      >
        <option value="">---Please choose---</option>
        <option value="1">Season 1</option>
        <option value="2">Season 2</option>
        <option value="3">Season 3</option>
        <option value="4">Season 4</option>
        <option value="5">Season 5</option>
        <option value="6">Season 6</option>
        <option value="7">Season 7</option>
        <option value="8">Season 8</option>
      </select>
      <div className="episode-page__cardbox">
        {episodeData
          .filter((episodes) => {
            if (season === "") {
              return episodes;
            } else if (episodes.season.toString() === season) {
              return episodes;
            }
          })
          .map((episodes) => {
            return (
              <div className="episode-page__card" key={episodes.id}>
                <h2 className="episode-page__titles">{episodes.name}</h2>
                <a className="episode-page__links" href={episodes.url}>Read More on TVMaze</a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Episodes;
