import { ThemeProvider } from '@material-ui/core/styles';
import { Grid, Container, Box } from '@material-ui/core';

import DashboardTheme from '../themes/DashboardTheme';

import DummyNav from '../components/DummyNav';

export default function MainLayout(props) {
  return (
    <ThemeProvider theme={DashboardTheme}>
      <Grid container direction="row">
        <Box>
          <DummyNav />
        </Box>
        <Container>{props.children}</Container>
      </Grid>
    </ThemeProvider>
  );
}
