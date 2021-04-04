import { Typography, Box, Button } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

export default function Api1(props) {
  const [response, setResponse] = useState(
    "Click the 'Send to Api Endpoint' for the results.",
  );

  async function handleClick() {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/guest_reservations`,
        props.payload,
      )
      .then((response) => {
        const data = response.data;
        setResponse(data);
      })
      .catch((error) => error.message);
  }

  const styles = {
    code: {
      backgroundColor: '#eee',
      padding: '1em',
      minWidth: '500px',
    },
  };

  return (
    <Box>
      <Typography variant="h2">{props.title} Payload</Typography>
      <Box width="500px" display="flex" flexDirection="column" justify="center">
        <Box display="flex" py={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleClick}
          >
            Send To Api Endpoint
          </Button>
        </Box>
        <Box display="flex">
          <Box mr={3} flexDirection="column">
            <Typography variant="h4">Payload</Typography>
            <pre style={styles.code}>
              <code>{JSON.stringify(props.payload, null, 2)}</code>
            </pre>
          </Box>
          <Box flexDirection="column">
            <Typography variant="h4">Result</Typography>

            <pre style={styles.code}>
              <code>{JSON.stringify(response, null, 2)}</code>
            </pre>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
