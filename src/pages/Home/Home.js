import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../../components/SingleCard/SingleCard";
import Search from "../Search/Search";
import "./Home.css";
const Home = ({ setFavorites, favorites }) => {
  const [content, setContent] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002`;
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "0868308798mshb5e914957b3005ap1ea8c2jsnfa81ee42303a",
      },
    });
    setContent(data.hits);
    setIsloading(true);
  };
  useEffect(() => {
    fetchData();
     // eslint-disable-next-line
  }, []);

  return (
    <>
      <Search content={content} setContent={setContent} />
      <div className="pageTitle">
        <span>Properties List</span>
      </div>
      {isloading ? (
        <div className="home">
          {content &&
            content.map((c) => (
              <SingleCard
                key={c.id}
                id={c.id}
                favorites={favorites}
                setFavorites={setFavorites}
                content={content}
                setContent={setContent}
                c={c}
                add="add"
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
      ) : (
        <div className="lds-dual-ring"></div>
      )}
    </>
  );
};

export default Home;
