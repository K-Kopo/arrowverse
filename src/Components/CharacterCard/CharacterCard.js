import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ actor }) => {
  const id = actor.person.id;
  return (
    <div >
      <Link className="character__card--link" to={`/characters/${id}`}>
        <div className="character__card">
          <div className="character__card--char" key={actor.character.id}>
            {actor.character.name}
          </div>
          <div className="character__card--person">{actor.person.name}</div>
          <img
            className="character__card--image"
            src={actor.character.image.medium}
            alt="character pic"
          />
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
