import React from 'react';
import { LandingPage } from './Components/LandingPage/landing';
import { AboutMe } from './Components/About/About';
import { Projects } from './Components/Projects/index';
import { GlobalStyle } from './styles';
import { Contact } from './Components/Contact/index';
import { Footer } from './Components/Footer/index';
import Navbar from './Components/Navbar/index.js';
import AbsoluteWrapper from "./Components/AbsoluteWrapper";



function App() {
  return (
    <AbsoluteWrapper>
    <GlobalStyle />
    <LandingPage />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </AbsoluteWrapper>
  );
}

export default App;
