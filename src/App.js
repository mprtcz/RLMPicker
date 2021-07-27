import React from "react";
import Page from "components/Page";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import DataModifierPage from "components/DataModifierPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Page />
            </Route>
            <Route exact path="/picker">
              <Page />
            </Route>
            <Route exact path="/RLMPicker">
              <Page />
            </Route>
            <Route exact path="/modify-data">
              <DataModifierPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
