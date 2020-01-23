import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  HomeButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#f8c428"
  },
  appBar: {
    backgroundColor: '#4c5ca4'
  },
  logo: {
      height: "50%",
      width: "auto",
  }
}));

export default function Homebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton href="#home" className={classes.homeButton}>
                        <HomeIcon fontSize="large"/>
                    </IconButton>
                    <Typography className={classes.title} variant="h5">
                    OutReach Assistant
                    </Typography>
                    <Button color="default">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}