import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/NavBar/index.js";
import FundingPage from "./Components/Funding/index";
import AboutPage from "./Components/About/index";
import { Footer } from "./Components/Footer/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/funding' component={FundingPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
