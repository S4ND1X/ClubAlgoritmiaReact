import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./App.css";

import GlobalStyle from "./GlobalStyle";

import LandingPage from "./Pages/LandingPage";

import WorkshopsProvider from "./context/WorkshopsProvider";

function App() {
  return (
    <WorkshopsProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </WorkshopsProvider>
  );
}

export default App;
