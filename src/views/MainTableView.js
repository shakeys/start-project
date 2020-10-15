import React, { forwardRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withStyles, Box, Paper, Checkbox, IconButton, Chip } from "@material-ui/core";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import LaunchIcon from '@material-ui/icons/Launch';

import MainLayout from "../layout/MainLayout";
import MaterialTable from "material-table";

import { authProvider } from '../authProvider';
import { getUserEmail,getCalendarEvents,getTasks } from '../services/GraphService';
import Moment from "moment";

const MailList = withStyles((_theme) => ({
  root: {
    padding: "40px 52px",
  },
}))(Box);

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function MainTableView() {
  const history = useHistory();

  const [emailsArr, setEmails] = useState([]);
  const [aggData, setAggData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getEmails = async () => {
    const token = await authProvider.getAccessToken();
    const emails = getUserEmail(token).then(res => {return res})
    return emails;
  } 

  const getEvents = async () => {
    const token = await authProvider.getAccessToken();
    const events = getCalendarEvents(token).then(res => {return res})
    return events;
  } 

  const getTasksData = async () => {
    const token = await authProvider.getAccessToken();
    const tasks = getTasks(token).then(res => {return res})
    return tasks;
  } 

  useEffect(() => {
     setLoading(true);
     const emails =  getEmails().then(res => {
       const data = res.value;
       data.map((mail,index) => {
          const tempObj = {
            receivedDateTime: mail.receivedDateTime,
            webLink: mail.webLink,
            tags: "Outlook",
            color: "primary",
            subject: mail.subject,
            importance: "normal",
            mandatory: "Optional",
            work: "Work"
          }
          setAggData(aggData => [...aggData, tempObj]);
       });
     })

     const events =  getEvents().then(res => {
      const data = res.value;
      data.map((mail,index) => {
         const tempObj = {
           receivedDateTime: mail.start.dateTime,
           webLink: '#',
           tags: "Calendar",
           color: "secondary",
           subject: mail.subject,
           importance: "normal",
           mandatory: "Mandatory",
           work: "Personal"
         }
         setAggData(aggData => [...aggData, tempObj]);
      });
    })


    const tasls =  getTasksData().then(res => {
      const data = res.value;
      data.map((mail,index) => {
         const tempObj = {
           receivedDateTime: mail.createdDateTime,
           webLink: '#',
           tags: "Tasks",
           color: "third",
           subject: mail.title,
           importance: mail.importance,
           mandatory: "Mandatory",
           work: "Personal"
         }
         setAggData(aggData => [...aggData, tempObj]);
      });
    })

     setLoading(false);
     setFetched(true);
  },[]);
 
  return (
    <MainLayout>
      {console.log(aggData)}
      <MailList>
        <MaterialTable
          title=""
          icons={tableIcons}
          options={{
            search: false,
            headerStyle: { color: "#008dc9", fontSize: 14, padding: "5px" },
            cellStyle: { fontFamily: "SharpSansDispNo1-Medium", fontSize: 14, padding: "5px" }
          }}
          pageSize={15}
          components={{
            Toolbar: props => (<div />),
            Container: props => <Paper {...props} elevation={0}/>
          }}
          columns={[
            { 
              title: "Close", 
              field: "select",
              sorting: false,
              render: rowData => <Checkbox color="primary" />,
            },
            { 
              title: "Date",
              field: "date",
              render: rowData => Moment(rowData.receivedDateTime).format('DD MMM YYYY, h:mm:ss a')},
            { 
              title: "Link",
              field: "webLink",
              sorting: false,
              render: rowData => <IconButton edge="start" color="primary" onClick={() => history.push(rowData.webLink)}><LaunchIcon /></IconButton>,
            },
            { title: "Item", field: "subject" },
            { 
              title: "Tags",
              field: "tags",
              render: rowData => <Chip label={rowData.tags} color={rowData.color} />,
            },
            { 
              title: "Priority", 
              field: "priority",
              render: rowData => "P2",
            },
            { 
              title: "Mandatory/Optional",
              field: "mandatory",
              render: rowData => rowData.importance === "normal" ? "Mandatory" : "Optional",
            },
            {
              title: "Work/Personal",
              field: "work",
              render: rowData => "Personal",
            },
          ]}
          
          data={aggData}
        />
      </MailList>
    </MainLayout>
  )
}

export default MainTableView;
