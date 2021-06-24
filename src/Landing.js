import React from "react";
import Home from "./Client/Home/Home.js";
import {BrowserRouter} from 'react-router-dom'
const Landing = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default Landing;
