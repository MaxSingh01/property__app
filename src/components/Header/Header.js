import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <span>E-State</span>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
