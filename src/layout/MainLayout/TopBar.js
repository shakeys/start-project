import React from "react";
import { makeStyles, AppBar, Toolbar, Button, IconButton, Badge } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((_theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: _theme.palette.common.white,
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
    height: 90,
    width: "100%",
    padding: 0,
  },
  logo: {
    width: 150,
  },
  button: {
    padding: 0,
  },
  sectionDesktop: {
    display: "flex",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar} elevation={0} variant="outlined">
        <Toolbar className={classes.toolbar}>
          <Button type="text" className={classes.button}>
            <img className={classes.logo} src="/images/who-logo.png" alt="Logo"/>
          </Button>

          <div className={classes.sectionDesktop}>
            <IconButton color="primary" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
                <SettingsIcon />
              </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" color="secondary">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}