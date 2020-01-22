import React from 'react';
import Homebar from './Toolbar';
import AppContainer from './AppContainer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f0f0f0'
  },
}));

export default function PageLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Homebar/>
            <AppContainer/>
        </div>
    )
}