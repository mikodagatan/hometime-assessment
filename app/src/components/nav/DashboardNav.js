import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box, Divider, Drawer } from '@material-ui/core';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg';
import { ReactComponent as DeviceManagerIcon } from '../../assets/icons/device-manager.svg';
import { ReactComponent as ConfigureSensorsIcon } from '../../assets/icons/configure-sensors.svg';
import { ReactComponent as AccountSettingsIcon } from '../../assets/icons/account-settings.svg';

import {
  dashboardPath,
  dashboardAccountSettingsPath,
  dashboardConfigureSensorsPath,
  dashboardDeviceManagerPath,
} from '../../Routes';

// TODO: Find way to make this responsive.
// There are packages that allow us to determine the element
// dimensions.

export const drawerWidth = 250;

const useStyles = makeStyles(() => ({
  rootDiv: {
    flexGrow: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    zIndex: '10',
  },
  root: {},
  indicator: {
    left: '0',
    width: '4px',
    borderRadius: '0 5px 5px 0',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    padding: '5px 20px 5px 15px',
    width: drawerWidth,
  },
  labelIcon: {
    textTransform: 'unset',
    minHeight: 'auto',
  },
  selected: {
    fontWeight: 'bold',
  },
  // drawer
  drawer: {
    border: '0',
  },
  drawerPaper: {
    border: '0',
    width: drawerWidth,
  },
}));

// cannot include in makeStyles for React SVG Components
const tabIconStyle = {
  standard: {
    margin: '0 20px 0 0',
  },
  configureSensors: {
    margin: '0 22px 0 0',
  },
};

export default function DashboardNav() {
  const classes = useStyles();

  const navElement = useRef(null);
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const navItems = [
    [
      'Dashboard', //
      dashboardPath,
      <DashboardIcon style={tabIconStyle.standard} key={0} />,
    ],
    [
      'Device Manager', //
      dashboardDeviceManagerPath,
      <DeviceManagerIcon style={tabIconStyle.standard} key={1} />,
    ],
    [
      'Configure Sensors',
      dashboardConfigureSensorsPath,
      <ConfigureSensorsIcon style={tabIconStyle.configureSensors} key={2} />,
    ],
    [
      'Account Settings',
      dashboardAccountSettingsPath,
      <AccountSettingsIcon style={tabIconStyle.standard} key={3} />,
    ],
  ];

  return (
    <div className={classes.rootDiv}>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
        anchor="left"
      >
        <Box pt={4} pl={3} pb={6} display="flex">
          <Logo />
        </Box>
        <Tabs
          classes={{ indicator: classes.indicator }}
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Dashboard Nav"
          className={classes.tabs}
        >
          {navItems.map(([label, url, icon], index) => {
            return (
              <Tab
                classes={{
                  wrapper: classes.wrapper,
                  labelIcon: classes.labelIcon,
                  selected: classes.selected,
                }}
                key={index}
                icon={icon}
                label={label}
                component={Link}
                to={url}
              />
            );
          })}
        </Tabs>
      </Drawer>
    </div>
  );
}
