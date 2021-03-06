import React from "react";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "../MoviesDetails/MovieDetails";
import Footer from "../Footer/Footer";
import Search from "../Search/Search";
import FirstPage from "./FirstPage";
import Login from "../Login/Login";


const Master = () => {
  return (
    <Switch> 
        <Route exact path="/" component={Login} />
        <Route  component={Home} />
    </Switch>
  );
};
const Home = () => {
  return (
    <div>
      <Header />
      <Route exact path="/home" component={FirstPage} />
      <Route exact path="/show_movie_details/:id" component={MovieDetails} />
      <Route exact path="/search/:key" component={Search} />
      <Route exact path="/categorie/:id" component={Categories} />
      <Footer />
    </div>
  );
};

export default Master;
