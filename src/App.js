import React from "react";
import Page from "components/Page";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import DataModifierPage from "components/data-modifier-page/DataModifierPage";
import ConverterPage from "data-api-converter/ConverterPage";
import { VideoDataProvider } from "contexts/VideosDataContext";

function App() {
  return (
    <VideoDataProvider>
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
              <Route exact path="/converter">
                <ConverterPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </VideoDataProvider>
  );
}

export default App;
