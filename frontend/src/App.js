import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
import {
  SummaryPage,
  InstallTutorialPage,
  WebsiteTutorialPage,
  ConclusionPage,
  CreditsPage,
  DemoPage
} from "./sections";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SummaryPage} />
          <Route exact path="/summary" component={SummaryPage} />
          <Route
            exact
            path="/tutorial_install"
            component={InstallTutorialPage}
          />
          <Route
            exact
            path="/tutorial_website"
            component={WebsiteTutorialPage}
          />
          <Route exact path="/conclusion" component={ConclusionPage} />
          <Route exact path="/credits" component={CreditsPage} />
          <Route exact path="/demo" component={DemoPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default App;
