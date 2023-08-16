import React from "react";
import { StyledApp, StyledContainerCards } from "./AppStyles";
import { Header } from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Card } from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalStyles />
        <Header />
        <StyledContainerCards>
          <Card email="lucas@gmail.com" name="Lucas" id={9} />
        </StyledContainerCards>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
