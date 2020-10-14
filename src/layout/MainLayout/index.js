import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    padding: 0,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  content: {
    marginLeft: "294px",
    marginTop: "84px",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <TopBar />
        <SideBar />

        <Box className={classes.content}>
          {children}
        </Box>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
