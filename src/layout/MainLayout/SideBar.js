import React from "react";
import clsx from "clsx";
import { Box, makeStyles, Grid, Button, Divider } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import SendIcon from "@material-ui/icons/Send";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EventNoteIcon from "@material-ui/icons/EventNote";

const useStyles = makeStyles((_theme) => ({
  sidebar: {
    backgroundColor: _theme.palette.grey[200],
    border: `1px solid ${_theme.palette.grey[300]}`,
    top: 0,
    left: 0,
    position: "fixed",
    width: "260px",
    height: "100%",
    padding: "130px 2% 40px",
  },
  button: {
    lineHeight: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    fontFamily: "SharpSansDispNo1-Medium",
    textTransform: "unset",
  },
  textBtn: {
    color: _theme.palette.grey[500],
  },
  activeMenuBtn: {
    color: _theme.palette.common.black,
  },
  iconBtn: {
    minWidth: "0",
  },
}));

function Sidebar({ match }) {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.sidebar}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Button disableElevation className={classes.button} color="primary" variant="contained" fullWidth>
            <Box component="span" mr={2}><CreateIcon /></Box>
            Compose Email
          </Button>
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Button type="text" className={clsx(classes.button, classes.textBtn, classes.activeMenuBtn)} color="default" fullWidth>
              <Box component="span" mr={2}><InboxIcon /></Box>
              Inbox
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="text" className={clsx(classes.button, classes.textBtn)} color="default" fullWidth>
              <Box component="span" mr={2}><SendIcon /></Box>
              Outbox
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="text" className={clsx(classes.button, classes.textBtn)} color="default" fullWidth>
              <Box component="span" mr={2}><BorderColorIcon /></Box>
              Draft
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="text" className={clsx(classes.button, classes.textBtn)} color="default" fullWidth>
              <Box component="span" mr={2}><FolderIcon /></Box>
              Folder
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="text" className={clsx(classes.button, classes.textBtn)} color="default" fullWidth>
              <Box component="span" mr={2}><DeleteIcon /></Box>
              Trash
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box mt={3} mb={3}>
              <Divider />
            </Box>
          </Grid>

          <Grid item container spacing={2} direction="row" xs={12}>
            <Grid item xs={3}>
              <Button className={classes.iconBtn} fullWidth disableElevation color="secondary" variant="outlined">
                <AssignmentIcon />
              </Button>
            </Grid>
            
            <Grid item xs={3}>
              <Button className={classes.iconBtn} fullWidth disableElevation color="secondary" variant="outlined">
                <EventNoteIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Sidebar;
