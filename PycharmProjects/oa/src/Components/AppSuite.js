import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import MiniApp from './MiniApp'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 1000,
    backgroundColor: '#4c5ca4',
    height: "85vh"
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
  },
  appScroll: {
      height: "100%",
      width: "25%",
      flexDirection: "column"
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
                   <Grid container spacing={2}>
                       <Box alignContent="flex-start" display="flex" className={classes.appScroll}>
                           <Grid container direction="row">
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                               <MiniApp/>
                           </Grid>
                       </Box>
                   </Grid>
               </CardContent>
           </Card>
        </div>
    )
}