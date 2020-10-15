import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, Modal, Backdrop, Fade, List, ListItem, ListItemText, ListSubheader, Typography } from "@material-ui/core";

import { authProvider } from '../authProvider';
import { getCalendarEvents } from '../services/GraphService';

import moment from "moment";



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
    fontSize: 13,
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





const CalendarListView = ({ open, handleClose, calendarListData }) => {
  const classes = useStyles();
  const [eventsArr,setEvents] = useState([]);
  const [eventsFiltered,setEventsFiltered] = useState([]);
  const [fetched,setFetched] = useState(false);

  const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = moment(obj[key].dateTime).format("MMDDYY");
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
  
  const getEvents = async () => {
    const token = await authProvider.getAccessToken();
    const eventsData = getCalendarEvents(token).then(res => {return res})
    return eventsData;
  }

  useEffect(() => {

    const events = getEvents().then(res => {
      setFetched(true);
      setEvents(res.value);
    })

 },[fetched]);



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
            {eventsArr.map((event,index) => (
              <li key={index} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader className={classes.header}>{moment(event.start.dateTime).format("dddd, MMMM Do YYYY")}</ListSubheader>
                    <MuiListItem>
                      <MuiListItemText
                        primary={`${event.subject} @ ${moment(event.start.dateTime).format('h:mm a')}`} 
                        secondary={<Typography variant="body2" component="label" className={classes.secondary}>{event.bodyPreview}</Typography>}
                      />
                    </MuiListItem>
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
