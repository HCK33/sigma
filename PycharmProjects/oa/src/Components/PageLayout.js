import React from 'react';
import Homebar from './Toolbar';
import AppContainer from './AppContainer'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/typography';
import Link from '@material-ui/core/link';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#bec4de'
  },
}));

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://sigmagroup.io/">
          Sigma
      </Link>{' '}
      2019 - {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function PageLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Homebar/>
            <AppContainer/>
            <Copyright/>
        </div>
    )
}