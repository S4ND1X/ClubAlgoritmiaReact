import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./App.css";

import GlobalStyle from "./GlobalStyle";

import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
