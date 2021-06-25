import React from "react";
import Master from "./Client/Home/Home.js";
import {BrowserRouter} from 'react-router-dom'
const Landing = () => {
  return (
    <BrowserRouter>
      <Master />
    </BrowserRouter>
  );
};

export default Landing;
