import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import theme from "./theme";
import history from "./config";

import MainPageView from "./views/MainPageView";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="*" component={MainPageView} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
