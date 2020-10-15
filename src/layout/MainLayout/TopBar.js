import React from "react";
import { makeStyles, AppBar, Toolbar, Button, IconButton, Box } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import MapIcon from '@material-ui/icons/Map';
import CachedIcon from '@material-ui/icons/Cached';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';

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
    width: 60,
  },
  button: {
    display: "flex",
    alignItems: "center",
    lineHeight: "normal",
    padding: 0,
    fontFamily: "SharpSansDispNo1-Medium",
    fontSize: 20,
    fontWeight: "bold",
    color: _theme.palette.primary.main,
    textTransform: "unset",
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
            <img className={classes.logo} src="/images/who-logo-only.png" alt="Logo"/>
            <Box component="span" ml={3}>
              START Dashboard
            </Box>
          </Button>

          <div className={classes.sectionDesktop}>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
            <IconButton color="primary">
              <SettingsBackupRestoreIcon />
            </IconButton>
            <IconButton color="primary">
              <MapIcon />
            </IconButton>
            <IconButton color="primary">
              <CachedIcon />
            </IconButton>
            <IconButton color="primary">
              <GetAppIcon />
            </IconButton>
            <IconButton color="primary">
              <PrintIcon />
            </IconButton>
            <IconButton color="primary">
              <SettingsIcon />
            </IconButton>
            <IconButton color="primary">
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}