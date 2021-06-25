import React, { useState,useEffect } from "react";
import MainContent from "../Content/MainContent";
import fetchContent from "../httpModule/Request";
import { useParams } from "react-router-dom";
const Search = () => {
  const { key } = useParams();
  const [search, setSearch] = useState([]);

  const searchHandler = (key) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7810631504627958844dab047babd01c&language=en-US&query=${key}&page=1&include_adult=false`;
    fetchContent(url).then((res) => {
      setSearch(res.data.results);
    });
  };

  useEffect(() => {
    searchHandler(key);
  }, [key]);
  return (
    <div className="mainContent">
      {search.map((contentMovie, index) => {
        return <MainContent key={index} {...contentMovie} />;
      })}
    </div>
  );
};

export default Search;
