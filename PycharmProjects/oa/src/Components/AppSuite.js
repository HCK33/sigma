import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 1000,
    backgroundColor: '#4c5ca4',
    minHeight: 700
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: "#4c5ca4",
    color: "#f8c428"
  },
  header: {
    backgroundColor: "#f5f5f5"
  }
}));

export default function AppSuite(props) {
    const classes = useStyles();

    return (
        <div>
           <Card className={classes.card}>
               <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="app-logo" className={classes.avatar}>
                            {props.icon}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="expand" onClick={props.close}>
                            <CloseIcon/>
                        </IconButton>
                    }
                    title={props.name}
                    subheader={props.description}
               />
               <CardContent>
                   <Grid
                       alignContent="center"
                       container
                       justify="center"
                       spacing={2}>
                       {props.apps}
                   </Grid>
               </CardContent>
           </Card>
        </div>
    )
}