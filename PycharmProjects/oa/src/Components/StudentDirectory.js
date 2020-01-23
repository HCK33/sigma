import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f0f0f0',
    width: "90vw",
    height: "80vh"
  },
  directory: {
    margin: "auto",
    marginTop: "15px"
  }
}));


export default function Directory() {
    const classes = useStyles();

    return (
        <div>
                <MaterialTable
                    className={classes.directory}
                    title="Student Directory"
                    columns={[
                        { title: 'First Name', field: 'first_name'},
                        { title: 'Last Name', field: 'last_name'},
                        { title: 'Email Address', field: 'email_address'},
                        { title: 'Social Media', field: 'social_media'},
                        { title:'Goal', field: 'goal'}
                    ]}
                    data={[{ first_name: 'Manny', last_name: 'Smith',
                        email_address: 'manny.smith@berkeley.edu', social_media: '',
                    goal: 'Transfer'}]}
                />
        </div>
    )
}