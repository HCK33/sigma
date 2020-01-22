import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 1000,
    backgroundColor: '#979797',
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
                    title={props.name}
                    subheader={props.description}
               />
               <CardContent>
                   {props.children}
               </CardContent>
           </Card>
        </div>
    )
}