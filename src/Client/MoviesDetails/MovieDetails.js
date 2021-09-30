import React, { useState, useEffect } from "react";
import fetchContent from "../httpModule/Request";
import { useParams } from "react-router-dom";
import "./movie.css";
import MainContent from "../Content/MainContent";
import PersonDetails from "../Persons/PersonDetails";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [videos, setVideo] = useState([]);
  const [castPerson, setCastPerson] = useState([]);
  let { id } = useParams();

  const movieHandler = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7810631504627958844dab047babd01c`;
    fetchContent(url).then((res) => {
      setMovieDetails(res.data);
    });
  };

  const similarMoviesHandler = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=a4999a28333d1147dbac0d104526337a&language=en_US`;
    fetchContent(url).then((res) => {
      setSimilarMovies(res.data.results);
    });
  };

  const castPersonHandler = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a4999a28333d1147dbac0d104526337a`;
    fetchContent(url).then((res) => {
      setCastPerson(res.data.cast);
    });
  };

  const videosHandler = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7810631504627958844dab047babd01c&language=en-US`;
    fetchContent(url).then((res) => {
      console.log(res);
      setVideo(res.data["results"][0]);
      console.log(videos);
    });
  };

  useEffect(() => {
    movieHandler(id);
    similarMoviesHandler(id);
    castPersonHandler(id);
  }, [id]);

  return (
    <>
      <div className="movieContainer">
        <div className="imgContainer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            height="auto"
            width="500px"
          />
         
       
          <div className="overviewContainer">
            <div className="overview">
              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
            </div>
            <div className="releaseDateSection">
              <div>
                <h3>Release Date</h3>
                <span>{movieDetails.release_date}</span>
              </div>
              <div>
                <h3>Run Time</h3>
                <span>{movieDetails.runtime}</span>
              </div>
              <div>
                <h3>Budget</h3>
                <span>{movieDetails.budget}</span>
              </div>
              <div>
                <h3>Home page</h3>
                <span>
                  <a style={{ color: "blue" }} href={movieDetails.homepage}>
                    {movieDetails.homepage}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 style={{ paddingTop: "60px", textTransform: "uppercase" }}>
              Casts
            </h2>
            <div className="personContainer">
              {castPerson.slice(0, 4).map((person, index) => {
                return <PersonDetails key={index} {...person} />;
              })}
            </div>
          </div>
        </div>

        <div className="similarMoviesContainer">
          <h2>Related Movies</h2>
          <div className="similarContainer">
            {similarMovies.slice(0, 8).map((similarMovie, index) => {
              return <MainContent key={index} {...similarMovie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
