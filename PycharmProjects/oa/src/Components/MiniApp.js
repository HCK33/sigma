import React from 'react';
import Card from '@material-ui/core/card'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  card: {
    width: "102px",
    height: "102px",
    margin: "5px"
  }
});


export default function MiniApp(props) {
    const classes=useStyles();
    return (
        <Card className={classes.card} variant="outlined">
            Mini Application
        </Card>
    )
}