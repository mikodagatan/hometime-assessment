import { createMuiTheme } from '@material-ui/core/styles';
import BaseTheme from './BaseTheme';

// Note: Still have to import from BaseTheme. Theme nesting cannot
// combine.

// declare global css
export const global = {
  header: {
    fontWeight: 'bold',
  },
};

export default createMuiTheme({
  typography: {
    fontFamily: BaseTheme.typography.fontFamily,
    h1: {
      fontSize: 48,
      fontWeight: global.header.fontWeight,
    },
    h2: {
      fontSize: 30,
      fontWeight: global.header.fontWeight,
    },
    h3: {
      fontSize: 22,
      fontWeight: global.header.fontWeight,
    },
    h4: {
      fontSize: 20,
      fontWeight: global.header.fontWeight,
    },
  },

  palette: BaseTheme.palette,

  overrides: {
    // Typography
    MuiTypography: {
      gutterBottom: {
        marginBottom: 16,
      },
    },
    // Button
    MuiButton: {
      root: {
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '16.34px',
        padding: '10px 20px !important',
        margin: '5px',
        textTransform: 'unset',
      },
      contained: {
        boxShadow: '0px 15px 30px 0px rgba(64,13,246,0.15)',
        '&:hover': {
          boxShadow: '0px 7.5px 15px 0px rgba(64,13,246,0.30)',
        },
      },
      outlined: {
        boxShadow: 'none',
      },
    },
    // Chip / Statuses
    MuiChip: {
      root: {
        fontWeight: 700,
        fontSize: '12px',
        color: 'white',
        padding: '12px 10px',
        margin: '0 10px 2.5px 0',
      },
      icon: {
        paddingBottom: '2px',
      },
      label: {
        paddingLeft: '15px',
      },
    },
    MuiTypography: BaseTheme.MuiTypography,
    MuiCssBaseline: BaseTheme.MuiCssBaseline,
  },
});
