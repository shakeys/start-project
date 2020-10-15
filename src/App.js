import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from './authProvider';
import theme from "./theme";
import history from "./config";
import MainPageView from "./views/MainPageView";
import LoginPageView from "./views/LoginPageView";

const getPage = (state) => {
  if(state === 'Authenticated')  {
    return <Route path="/" component={MainPageView} />
  } else {
    return <Route path="/" component={LoginPageView} />
  }
}

 const App = () => {
  return (
    <AzureAD provider={authProvider}>
      {({ logout, authenticationState }) => {
        const authState = authenticationState;
        return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          {getPage(authState)}
        </Switch>
      </Router>
    </ThemeProvider>
        )}}
    </AzureAD>
  );
}

export default App;
