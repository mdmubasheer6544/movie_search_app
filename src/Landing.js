import React from "react";
import Master from "./Client/Home/Home.js";
import {BrowserRouter,HashRouter} from 'react-router-dom'
const Landing = () => {
  return (
    <HashRouter>
      <Master />
    </HashRouter>
  );
};

export default Landing;
