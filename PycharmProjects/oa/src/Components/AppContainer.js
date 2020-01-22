import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Portal from './Portal'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
    paddingBottom: "65px"
  }
}));

export default function AppContainter() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="false"  color="inherit">
                <Grid container className={classes.root}>
                    <Grid container justify="center" spacing={3}>
                      {[0, 1, 2].map(value => (
                        <Grid key={value} item>
                          <Portal/>
                        </Grid>
                      ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}