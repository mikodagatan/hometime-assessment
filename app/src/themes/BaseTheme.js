import { createMuiTheme } from '@material-ui/core/styles';

// declare global css
export const global = {
  colors: {
    primary: '51,100,90',
    success: '123,199,0',
    warning: '255,199,0',
    danger: '255,65,67',
  },
};

export default createMuiTheme({
  typography: {
    fontFamily: ['Poppins', '-apple-system', 'Verdana', 'sans-serif'].join(','),
    h1: {
      padding: '0',
      fontSize: '48px',
      fontWeight: '700',
    },
    h2: {
      padding: '0',
      fontSize: '30px',
      fontWeight: '700',
    },
    h3: {
      padding: '0',
      fontSize: '22px',
      fontWeight: '700',
    },
  },

  // Use rgba. Figma can change colors to rgba.
  palette: {
    primary: {
      main: 'rgba(' + global.colors.primary + ', 1)',
      contrastText: '#fff',
    },
    success: {
      main: 'rgba(' + global.colors.success + ',1)',
      contrastText: '#fff',
    },
    warning: {
      main: 'rgba(' + global.colors.warning + ',1)',
      contrastText: '#fff',
    },
    danger: {
      main: 'rgba(' + global.colors.danger + ',1)',
      contrastText: '#fff',
    },
    background: {
      default: `rgba(244,246,249,1)`,
    },
  },

  overrides: {
    // Typography
    MuiTypography: {
      gutterBottom: {
        marginBottom: 16,
      },
    },
    // global
    MuiTab: {
      root: {
        fontSize: '14px',
      },
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
});
