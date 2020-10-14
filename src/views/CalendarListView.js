import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, Modal, Backdrop, Fade, List, ListItem, ListItemText, ListSubheader, Typography } from "@material-ui/core";

const useStyles = makeStyles((_theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 500,
    backgroundColor: _theme.palette.background.paper,
    border: "1px solid transparent",
    padding: 0,
  },
  root: {
    width: "100%",
    backgroundColor: _theme.palette.background.paper,
    position: "relative",
    overflowX: "auto",
    maxHeight: 500,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  header: {
    backgroundColor: _theme.palette.grey[200],
    border: `1px solid ${_theme.palette.grey[300]}`,
    fontSize: 18,
    color: _theme.palette.common.black,
    fontWeight: "bold",
  },
  secondary: {
    fontSize: 14,
    color: _theme.palette.grey[500],
  },
}));

const MuiListItem = withStyles((_theme) => ({
  root: {
    borderBottom: `1px solid ${_theme.palette.grey[300]}`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
}))(ListItem);

const MuiListItemText = withStyles((_theme) => ({
  root: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  primary: {
    fontWeight: "bold",
    fontSize: 16,
  },
}))(ListItemText);

function CalendarListView({ open, handleClose, calendarListData }) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}                                            
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <List className={classes.root} subheader={<li />}>
            {[0, 1, 2, 3, 4].map((sectionId) => (
              <li key={`section-${sectionId}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader className={classes.header}>{`Wednesday, Oct 15 ${sectionId}`}</ListSubheader>
                  {[0, 1, 2].map((item) => (
                    <MuiListItem key={`item-${sectionId}-${item}`}>
                      <MuiListItemText
                        primary={`Item ${item}`} 
                        secondary={<Typography variant="body2" component="label" className={classes.secondary}>Im secondary text for calendar events Im secondary text for calendar events  </Typography>}
                      />
                    </MuiListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </div>
      </Fade>
    </Modal>
  );
}

CalendarListView.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  calendarListData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CalendarListView;
