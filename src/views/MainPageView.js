import React, {useEffect,useState} from "react";
import clsx from "clsx";
import { withStyles, Box, makeStyles, Grid, Typography, Button } from "@material-ui/core";
import FlagIcon from '@material-ui/icons/Flag';
import DeleteIcon from '@material-ui/icons/Delete';

import MainLayout from "../layout/MainLayout";
import { authProvider } from '../authProvider';
import { getUserEmail } from '../services/GraphService';

import moment from "moment";

const MailList = withStyles((_theme) => ({
  root: {
    backgroundColor: _theme.palette.grey[200],
    borderRight: `1px solid ${_theme.palette.grey[300]}`,
    position: "fixed",
    width: 500,
    height: "calc(100% - 90px)",
    overflowY: "auto",
  },
}))(Box);

const useStyles = makeStyles((_theme) => ({
  mail: {
    borderBottom: `1px solid ${_theme.palette.grey[300]}`,
    padding: "20px",
    color: _theme.palette.grey[600],
    '&:hover': {
      cursor: "pointer",
      backgroundColor: _theme.palette.grey[400],
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
  tags: {
    display: "flex",
    justifyContent: "flex-end",
  },
  iconBtn: {
    minWidth: "0",
    padding: "0px",
    marginLeft: 2,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  trashBtn: {
    color: _theme.palette.error.main,
  },
  flagBtn: {
    color: _theme.palette.success.main,
  },
  loaderContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}));

const  MainPageView = () => {
  const classes = useStyles();

  const [emailsArr,setEmails] = useState([]);
  const [fetched,setFetched] = useState(false);
  const [isLoading,setLoading] = useState(false);

  const getData = async () => {
      setLoading(true);
      const token = await authProvider.getAccessToken();
      const emails = getUserEmail(token).then(res => {return res})
      return emails;
      
  } 

  useEffect(() => {
     const emails =  getData().then(res => {
       setLoading(false);
       setFetched(true);
       setEmails(res.value)
     })
     console.log(isLoading)
  },[fetched]);

  return (
    <MainLayout>
      <MailList>
        
        <Grid container>
        {isLoading &&
          <Grid item xs={12}>
            <span>Extracing Data Please Wait...</span>
          </Grid>
        }
        {isLoading === false && emailsArr.map((mail, index) => (
           <Grid key={index} item xs={12}>
            <Box className={clsx(classes.mail, !mail.isRead && classes.unread)}>
              <Box className={classes.mailerHeader}>
                <Typography variant="h5" component="p" className={classes.mailerName}>{mail.sender.emailAddress.name}</Typography>
                <Typography variant="subtitle2" component="p" className={classes.mailerTime}>{moment(mail.receivedDateTime).fromNow()}</Typography>
              </Box>
              <Box className={classes.mailerHeader}>
                <Typography variant="subtitle2" component="p">{mail.sender.emailAddress.address}</Typography>
                <Box>
                  <Button type="text" className={clsx(classes.iconBtn, classes.flagBtn)}><FlagIcon className={classes.iconSize} /></Button>
                  <Button type="text" className={clsx(classes.iconBtn, classes.trashBtn)}><DeleteIcon className={classes.iconSize} /></Button>
                </Box>
              </Box>

              <Box pt={1} component="div" className={classes.subject}>
                <Typography variant="body1" component="label">{mail.bodyPreview}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        </Grid>
      </MailList>
    </MainLayout>
  );
}

export default MainPageView;
