import React, { useEffect } from "react";
import Page from "components/Page";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Navbar from "components/Navbar";
import DataModifierPage from "components/data-modifier-page/DataModifierPage";
import ConverterPage from "data-api-converter/ConverterPage";
import { VideoDataProvider } from "contexts/VideosDataContext";
import AnalysisPage from "components/analysis/AnalysisPage";
import ReactGA from "react-ga";
import { Keys } from "./config/keys";

ReactGA.initialize(Buffer.from(Keys["GOOGLE_TRACKING_ID"]).toString());
function App() {
  useEffect(() => {
    // This line will trigger on a route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

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
              <Route exact path="/RLMPicker/picker">
                <Page />
              </Route>
              <Route exact path="/RLMPicker">
                <Page />
              </Route>
              <Route exact path="/modify-data">
                <DataModifierPage />
              </Route>
              <Route exact path="/RLMPicker/modify-data">
                <DataModifierPage />
              </Route>
              <Route exact path="/converter">
                <ConverterPage />
              </Route>
              <Route exact path="/RLMPicker/converter">
                <ConverterPage />
              </Route>
              <Route exact path="/anal">
                <AnalysisPage />
              </Route>
              <Route exact path="/RLMPicker/anal">
                <AnalysisPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </VideoDataProvider>
  );
}

export default withRouter(App);
