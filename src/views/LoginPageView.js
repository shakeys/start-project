import React from "react";
import { makeStyles } from "@material-ui/core";
import MsIcon from "../img/msicon.png";

import { authProvider } from '../authProvider';

const useStyles = makeStyles((_theme) => ({
  msButtonContainer: {
    border: "1px solid black",
    maxWidth: 350,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: '#ededed'
    }
  },
  msButtonIcon: {
    width: 20,
    height: 20,
  },
  msButtonText: {
    fontFamily: "SharpSansDispNo1-Medium",
    marginLeft: 10,
  },
  container: {
    height: "100%",
    width: "100%",
  },
  loginContainer: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 50,
    width: 250,
  },
}));

const LoginPageView = () => {
  const classes = useStyles();

  const login = () => {
    authProvider.login();
  }

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <img className={classes.logo} src="/images/who-logo.png" alt="Logo" />
        <div onClick={() => login()} className={classes.msButtonContainer}>
          <img className={classes.msButtonIcon} src={MsIcon} alt="Logo" />
          <span className={classes.msButtonText}>Sign In using your Microsoft Account</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPageView;
