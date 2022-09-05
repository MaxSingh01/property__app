import React from "react";
import SingleCard from "../../components/SingleCard/SingleCard";

const Favorites = ({ favorites }) => {
  return (
    <>
      <div className="pageTitle">
        <span>Favorite List</span>
      </div>
      <div className="home">
        {favorites &&
          favorites.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              favorites={favorites}
              coverPhoto={c.coverPhoto.url}
              price={c.price}
              title={c.title}
              rentFrequency={c.rentFrequency}
              rooms={c.rooms}
              bath={c.baths}
              purpose={c.purpose}
            />
          ))}
      </div>
    </>
  );
};

export default Favorites;
