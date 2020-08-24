import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./App.css";

import GlobalStyle from "./GlobalStyle";

import LandingPage from "./Pages/LandingPage";

import WorkshopsProvider from "./context/WorkshopsProvider";

//Main App component, providing global states and functions, gobalstyle and switch fot potetntial growth
export default function App() {
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
