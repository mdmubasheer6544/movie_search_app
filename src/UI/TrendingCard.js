import React from 'react';
import './tending.css'
import { Link } from "react-router-dom";

const TrendingCard = (props) => {
    return (
        <div className="cardCss">
        <Link to={`/show_movie_details/${props.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="poster" height="250px" width="200px" />
            </Link>
            <div className="rating">
            <h5>{props.title}</h5>
            <small>Rate:<span style={{ color: props.vote_average <=3 ? 'red': props.vote_average>=6?"green":"red" }}> {props.vote_average}</span></small> 
            </div>

        </div>
    );
};

export default TrendingCard;