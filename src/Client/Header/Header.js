import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import fetchContent from "../httpModule/Request";

const Header = () => {
  const [search, setSearch] = useState();
  const [categoriesTopFour, setCategoriesTopFour] = useState([]);
  const [moreCategories, setMoreCategories] = useState([]);

  const topFoureHandler = () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=7810631504627958844dab047babd01c`;
    fetchContent(url).then((res) => {
      setMoreCategories(res.data.genres.slice(4, res.data.genres.length));
      setCategoriesTopFour(res.data.genres.slice(0, 4));
    });
  };

  useEffect(() => {
    topFoureHandler();
  }, []);

  return (
    <div className="header">
      
        <button className="Item backbtn">
        <h1><Link to="/">&larr;</Link> </h1>
        </button>
  
      <ul className="menuItem">
        <li className="item">
          <Link to="/home">Home</Link>
        </li>
        {categoriesTopFour.map((cat) => (
          <li className="item" key={cat.id}>
            <Link to={`/categorie/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}

        <li className="moreCat Item" style={{ fontWeight: "bold" }}>
          More Categories <i class="fas fa-caret-square-down"></i>
          <ul className="moreCategories">
            {moreCategories.map((cat) => (
              <li className="item catItem" key={cat.id}>
                <Link to={`/categorie/${cat.id}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <div className="searchBox">
        <input
          type="text"
          className="inputBox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name=""
          id=""
        />
        <button
        disabled={!search}
        type="button"
          className="searchBtn"
          onClick={() => {
            setSearch("");
          }}
        >
          <Link  
            style={{ color: "#fff", textDecoration: "none",pointerEvents:!search?"none":null }}
            to={`/search/${search}`}
          >
            Search
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
