import React from "react";
import Navigation from "./Navigation";
import Introduction from "./Introduction";
import Menu from "./Menu";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Introduction />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

export default App;
