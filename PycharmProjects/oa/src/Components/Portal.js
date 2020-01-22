import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';





const useStyles = makeStyles(theme => ({
  card: {
    height: 500,
    width: 370,
    backgroundColor: "#818181"
  },
  avatar: {
    backgroundColor: grey[500],
  },
  header: {
    backgroundColor: "#f5f5f5"
  }
}));

export default function Portal() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="app-logo" className={classes.avatar}>
                            <MenuBookIcon/>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="expand">
                            <AspectRatioIcon/>
                        </IconButton>
                    }
                    title="High Level Applications"
                    subheader="Optional explanations for these"
                />
                <CardContent>
                    <Typography variant="h3">Font</Typography>
                    <Typography variant="body2">Font</Typography>
                </CardContent>
            </Card>
        </div>
    )
}