import React from "react";
import { StyledApp, StyledContainerCards } from "./AppStyles";
import { Header } from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalStyles />
        <Header />
        <StyledContainerCards></StyledContainerCards>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
