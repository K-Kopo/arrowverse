import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({actor}) => {
    const id = actor.person.id;
    return (
        <div>
                <div className="character__card">
                <div className="character__card--char" key={actor.character.id}>{actor.character.name}</div>
                <div className="character__card--person">{actor.person.name}</div>
                <Link to={`/characters/${id}`}>See Details</Link>
                </div>
        </div>
    );
};

export default CharacterCard;