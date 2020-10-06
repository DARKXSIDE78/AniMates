import React from "react";
import { Switch, Route } from "react-router-dom";
// import { useTransition, animated } from "react-spring";
import Home from "./Home";
import FundingPage from "./Components/Funding/index";
import AboutPage from "./Components/About/index";
import Navbar from "./Components/NavBar/NavBar.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/funding' component={FundingPage} />
      </Switch>
    </>
  );
};

export default App;
