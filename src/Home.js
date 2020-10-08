import React from "react";
import { AboutMe } from "./Components/Home/index";
import { Latest } from "./Components/Latest/index.js";
import { GlobalStyle } from "./styles";
import { Contact } from "./Components/Contact/index";
import { Footer } from "./Components/Footer/index";
import backdrop from "./Images/konoha_backdrop.png";
import mobileBackdrop from "./Images/mobile_backdrop.jpeg";

function App() {
  return (
    <>
      <GlobalStyle image={backdrop} mobile={mobileBackdrop} />
      <div style={{ padding: "0, 200px" }}>
        <Latest />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
