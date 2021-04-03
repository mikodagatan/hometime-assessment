import { Box, Button, Chip, Container, Typography } from '@material-ui/core';
import Status from '../components/custom/Status';

export default function ThemePage() {
  return (
    <div className="theme-page">
      <Container>
        <Box py={2}>
          <Typography variant="h2" gutterBottom>
            Buttons
          </Typography>
          <Button variant="contained" color="primary" disableElevation>
            Theme
          </Button>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
        </Box>
        <Box py={2}>
          <Typography variant="h2" gutterBottom>
            Default Chips in Material
          </Typography>
          <Chip label="Success" color="success" />
          <Chip label="Danger" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
        </Box>
        <Box py={2}>
          <Typography variant="h2" gutterBottom>
            Customized Chips: Status.js
          </Typography>
          <Status label="Success" status="success" />
          <Status label="Warning" status="warning" />
          <Status label="Danger" status="danger" />
        </Box>
      </Container>
    </div>
  );
}
