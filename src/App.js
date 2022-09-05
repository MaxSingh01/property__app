import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";


function App() {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home setFavorites={setFavorites} favorites={favorites} />}
            exact
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
