import React from "react";
import Categories from "../Categories/Categories";
import Haeder from "../Header/Header";
import Trending from "../Trending/Trending";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../MoviesDetails/MovieDetails";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import MainContent from "../Content/MainContent";
import FirstPage from "./FirstPage";

const Home = () => {
  return (
    <div>
      <Haeder />
      <Switch>
        <Route
          exact
          path="/"
          component={FirstPage}
        />
        <Route
          exact
          path="/show_movie_details/:id"
          component={MovieDetails}
         
        />
        <Route
          exact
          path="/search/:key"
          component={Search}
        
        />
        <Route
          exact
          path="/categorie/:id"
          component={Categories}
        />

      </Switch>
      <Footer/>
    </div>
  );
};

export default Home;
