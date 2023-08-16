import React from "react";
import { StyledApp, StyledContainerCards } from "./AppStyles";
import { Header } from "./components/Header";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <StyledContainerCards></StyledContainerCards>
    </StyledApp>
  );
}

export default App;
