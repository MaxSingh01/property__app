import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";
const Search = ({ content, setContent }) => {
  const [minRooms, setMinRooms] = useState(0);
  const [minBathRooms, setMinBathRooms] = useState(0);
  const [purpose, setPurpose] = useState("for-rent");
  const [maxPrice, setMaxPrice] = useState(0);
  const handleChange = (value) => {
    setMinRooms(value);
  };
  const handlePurpose = (value) => {
    setPurpose(value);
  };
  const handleBath = (value) => {
    setMinBathRooms(value);
  };
  const handleMinPrice = (value) => {
    setMaxPrice(value);
  };

  const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&roomsMin=${minRooms}&purpose=${purpose}&bathsMin=${minBathRooms}&priceMax=${maxPrice}`;
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "0868308798mshb5e914957b3005ap1ea8c2jsnfa81ee42303a",
      },
    });
    setContent(data.hits);
  };
  useEffect(() => {
    fetchData();
     // eslint-disable-next-line
  }, [minRooms, purpose, minBathRooms, rentFrequency, maxPrice]);

  return (
    <div className="filters">
      <span>Search Filters</span>
      {/* purpose filter for properties */}
      <select
        value={purpose}
        className="select"
        onChange={(e) => handlePurpose(e.target.value)}
      >
        <option value="Purpose" hidden>
          Purpose
        </option>
        <option value="for-rent">for-rent</option>
        <option value="for-sale">for-sale</option>
      </select>

      {/* room filter for properties */}
      <select
        className="select"
        value={minRooms}
        placeholder="Rooms"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="Minimum room" hidden>
          Minimum room
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      {/* Bathroom filter for properties */}
      <select
        value={minBathRooms}
        className="select"
        onChange={(e) => handleBath(e.target.value)}
      >
        <option value="Minimum Bathroom" hidden>
          Minimum Bathroom
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      {/* select price */}
      <select
        value={maxPrice}
        className="select"
        onChange={(e) => handleMinPrice(e.target.value)}
      >
        <option value="Minimum price" hidden>
          Minimum price
        </option>
        <option value="5000">5000</option>
        <option value="8000">8000</option>
        <option value="12000">12000</option>
      </select>
    </div>
  );
};

export default Search;
