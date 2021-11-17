import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Characters = () => {
    
  const { userId } = useParams();
  const [singleActor, setSingleActor] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/people/${userId}`)
      .then((response) => {
        setSingleActor(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  if (singleActor === null) return <h2>Still loading....</h2>;

  const { name, country, birthday, gender, image } = singleActor;

  return (
    <div>
      <h1>{name}</h1>
      <p>{country.name}</p>
      <p>{birthday}</p>
      <p>{gender}</p>
      <img src={image.medium} alt="actor pic" />
    </div>
  );
};

export default Characters;
