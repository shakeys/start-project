import React from "react";
import clsx from "clsx";
import { withStyles, Box, makeStyles, Grid, Typography } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import MainLayout from "../layout/MainLayout";

const MailList = withStyles((_theme) => ({
  root: {
    backgroundColor: _theme.palette.grey[200],
    borderRight: `1px solid ${_theme.palette.grey[300]}`,
    position: "fixed",
    width: 500,
    height: "calc(100% - 90px)",
    overflowY: "scroll",
  },
}))(Box);

const useStyles = makeStyles((_theme) => ({
  mail: {
    borderBottom: `1px solid ${_theme.palette.grey[300]}`,
    padding: "20px",
    color: _theme.palette.grey[700],
    '&:hover': {
      cursor: "pointer",
      backgroundColor: "#b3e5fc",
    },
  },
  unread: {
    color: _theme.palette.common.black,
  },
  mailerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mailerName: {
    fontWeight: "bold",
    lineHeight: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 18,
    paddingTop: 2,
  },
  mailerIcon: {
    fontSize: 15,
    marginRight: 10,
  },
  mailerTime: {
    fontSize: 10,
  },
  subject: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

function MainPageView() {
  const classes = useStyles();

  return (
    <MainLayout>
      <MailList>
        <Grid container>
          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box className={clsx(classes.mail, classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>Ronnel Dela Cruz</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>03:00 PM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" component="p">ronnel@rebar.ph</Typography>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">Planning your first sprint in Rebar Sprints Planning your first sprint in Rebar Sprints</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MailList>
    </MainLayout>
  );
}

export default MainPageView;
