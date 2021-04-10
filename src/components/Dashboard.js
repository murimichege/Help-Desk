import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, CardHeader } from '@material-ui/core';


function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    Dashboard: {
      backgroundColor: 'lightgrey'
    }
  }));
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.Dashboard}>
      <CardHeader title="Dashboard"/>
      </div>
      <CardContent>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={1}>Total Tickets</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={1}>Open Tickets</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={1}>Closed Tickets</Paper>
        </Grid>
      </Grid>
    </div>
    </CardContent>
    </Card>
  );
}
export default Dashboard
