import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Characters.scss";

const Characters = () => {
  const { userId } = useParams();
  const [singleActor, setSingleActor] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/people/${userId}`)
      .then((response) => {
        setSingleActor(response.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  if (singleActor === null) return <h2>Still loading....</h2>;

  const { name, country, birthday, gender, image } = singleActor;

  return (
    <div className="character-page">
      <div className="character-page__detailsbox">
        <h1 className="character-page__name">{name}</h1>
        <p className="character-page__details">{country.name}</p>
        <p className="character-page__details">{birthday}</p>
        <p className="character-page__details">{gender}</p>
      </div>
      <img
        className="character-page__image"
        src={image.medium}
        alt="actor pic"
      />
    </div>
  );
};

export default Characters;
