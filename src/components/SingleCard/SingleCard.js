import React, { useState } from "react";
import { unavailable } from "../../Config/Config";

import "./SingleCard.css";
const SingleCard = ({
  coverPhoto,
  title,
  price,
  rentFrequency,
  bath,
  rooms,
  purpose,
  favorites,
  id,
  c,
  setFavorites,
  content,
  remove,
}) => {
  const [addFavorites, setAddFavorites] = useState(false);
  const handleClick = (c) => {
    setAddFavorites(true);
    setFavorites([...favorites, content.find((item) => item.id === id)]);
  };

  return (
    <div className="singleCard">
      <img className="poster" src={coverPhoto ? coverPhoto : unavailable} alt="img"/>

      <div className="price">
        <div>
          {price} / {rentFrequency}
        </div>
        {!remove ? (
          <div style={{ cursor: "pointer" }} onClick={() => handleClick()}>
            {addFavorites ? "Favorites" : "Add to Favorites"}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="title">
        <div>{title}</div>
      </div>
      <div className="propertyInfo">
        <div>{rooms}Rooms</div>
        <div>{bath}Bathrooms</div>
        <div>{purpose}</div>
      </div>
    </div>
  );
};

export default SingleCard;
