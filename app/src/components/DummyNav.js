import React from 'react';
import { Box, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Logo } from '../assets/icons/logo.svg';

import { Link } from 'react-router-dom';

import {
  loginPath,
  homePath,
  aboutPath,
  dashboardPath,
  dashboardThemePath,
} from '../Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// The DummyNav is created so we can start working on the pages.

export default function DummyNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={4}>
        <Logo />
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to={homePath}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to={loginPath}>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to={aboutPath}>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button component={Link} to={dashboardPath}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to={dashboardThemePath}>
          <ListItemText primary="Dashboard theme" />
        </ListItem>
      </List>
    </div>
  );
}
