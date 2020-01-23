import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f0f0f0',
    width: "90vw",
    height: "80vh"
  },
  calendar: {
    width: "80%",
    height: "70%",
    margin: "auto",
    marginTop: "15px",
    border: ".5px"
  }
}));

export default function Calendur() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography align="center" variant="h4">Calendar</Typography>
                <Typography align="center" variant="body1">
                    Select a day or date range to see appointments and events.
                </Typography>
                <Calendar className={classes.calendar}/>
            </Paper>
        </div>
    )
}

