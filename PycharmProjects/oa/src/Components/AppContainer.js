import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Portal from './Portal';
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
                    <Grid item xs={12} sm={6} md={4}>
                      <Portal
                      name="Faculty Portal"
                      description="optional description"
                      icon={<CompareArrowsIcon/>}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                      <Portal
                      name="Campaign Manager"
                      description="optional description"
                      icon={<DynamicFeedIcon/>}
                      />
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                      <Portal
                      name="Student Information System"
                      description="optional description"
                      icon={<GroupIcon/>}
                      />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}