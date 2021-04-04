import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Nav, { drawerWidth } from '../components/Nav';
import DashboardTheme from '../themes/DashboardTheme';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(244,246,249,1)',
  },
  main: {
    width: `calc(100% - ${drawerWidth}px)`,
    left: drawerWidth,
    top: 0,
    position: 'absolute',
    backgroundColor: DashboardTheme.palette.background.default,
    minHeight: '100%',
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={DashboardTheme}>
      <Box>
        <Nav />
        <div className={classes.main}>
          <Box px={6} py={4}>
            {props.children}
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
}
