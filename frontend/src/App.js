import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter, BrowserRouter } from "react-router-dom";
import {
  SummaryPage,
  InstallTutorialPage,
  WebsiteTutorialPage
} from "./sections";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default App;
