import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendingCard from "../../UI/TrendingCard";
import './trending.css'
 const Trending = () => {
    const [tredingMovies, setTrendingMovies] = useState([])

    
  useEffect(() => {
    const fetchTrending = async () => {
      const response = await axios.get(   
        "https://api.themoviedb.org/3/trending/all/day?api_key=7810631504627958844dab047babd01c"
      );
      const trendingMovies = await response.data;
      setTrendingMovies(trendingMovies.results);
    };
    fetchTrending();
  }, []);


  return (
  <div className="mainSlider">
  <div className="slider">
        {tredingMovies.map((movie)=>{
            return <TrendingCard key={movie.id} { ...movie}/>
        })}
  </div>
  </div>);
};

export default Trending