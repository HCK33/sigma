import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AppSuite from './AppSuite'


const useStyles = makeStyles(theme => ({
  root: {
      display: 'inline-block',
  },
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

export default function Portal(props) {
    const classes = useStyles();

    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="app-logo" className={classes.avatar}>
                            {props.icon}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="expand" onClick={handleToggle}>
                            <AspectRatioIcon/>
                        </IconButton>
                    }
                    title={props.name}
                    subheader={props.description}
                />
                <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth={fullWidth}
                        maxWidth={maxWidth}
                >
                    <AppSuite/>
                </Dialog>
                <CardContent>
                    <Typography variant="h3">Font</Typography>
                    <Typography variant="body2">Font</Typography>
                </CardContent>
            </Card>
        </div>
    )
}