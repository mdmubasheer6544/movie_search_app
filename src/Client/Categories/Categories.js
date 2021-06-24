import React, { useState, useEffect } from "react";
import "./categories.css";
import MainContent from "../Content/MainContent";
import fetchContent from "../httpModule/Request";
import PersonDetails from "../Persons/PersonDetails";


const trendingPersonUrl = `https://api.themoviedb.org/3/trending/person/week?api_key=7810631504627958844dab047babd01c`;
const Categories = (props) => {

  const [content, setContent] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/28/movies?api_key=7810631504627958844dab047babd01c`;
    if (Object.keys(props).length !== 0) {
      url = `https://api.themoviedb.org/3/genre/${props.match.params.id}/movies?api_key=7810631504627958844dab047babd01c`;
    
    }
   
    fetchContent(url).then((res) => setContent(res.data.results));
    fetchContent(trendingPersonUrl).then((res) =>
      setTrendingPerson(res.data.results)
    );
  }, [props]);



  return (
    <>
    <h2 style={{padding: "25px 60px"}}>Action Movies</h2>
      <div className="mainContent">
        {content.map((contentMovie, index) => {
          return <MainContent key={index} {...contentMovie} />;
        })}
      </div>

      <div>
        <h1 className="tendingPerson">Trending persons on this week</h1>
        <div className="personContainer">
          {trendingPerson.slice(0, 10).map((person, index) => {
            return <PersonDetails key={index} {...person} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
