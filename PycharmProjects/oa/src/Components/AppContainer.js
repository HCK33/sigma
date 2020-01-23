import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Portal from './Portal';
import Calendur from './Calendar'
import Directory from './StudentDirectory'
import GroupIcon from '@material-ui/icons/Group';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    paddingBottom: "65px",
  }
}));

export default function AppContainter() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="false"  color="inherit">
                <Grid container className={classes.root} spacing={3}>
                    <Grid item s={12}>
                      <Portal
                      name="Faculty Portal"
                      icon={<CompareArrowsIcon/>}
                      appName="None Yet"
                      />
                    </Grid>
                    <Grid item s={12}>
                      <Portal
                      name="Campaign Manager"
                      icon={<DynamicFeedIcon/>}
                      component={<Calendur/>}
                      appName="Calendar"
                      />
                    </Grid>
                    <Grid item s={12}>
                      <Portal
                      name="Student Information System"
                      icon={<GroupIcon/>}
                      component={<Directory/>}
                      appName="Directory"
                      />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}