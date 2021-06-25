import React from "react";
import "./content.css";
import {Link} from 'react-router-dom'

const MainContent = (props) => {
  return (
    <div className="mainContentCrd">
      <div className="mainImg">
      <Link to={`/show_movie_details/${props.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt=""
        />

      </Link>
      </div>
      <h4 className="movieTitle">
        {props.original_title}
        <sup>{props.original_language}</sup>
      </h4>
      <div className="dateContent">
        <small>{props.release_date}</small>
        <small >
          Rating :<span style={{ color: props.vote_average <=3 ? 'red': props.vote_average>=6?"green":"red",fontWeight:"bold" }}> {props.vote_average}</span>
        </small>
      </div>
    </div>
  );
};

export default MainContent;
