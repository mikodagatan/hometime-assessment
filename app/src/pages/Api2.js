import { Typography, Box, Button } from '@material-ui/core';
``;
export default function Api2() {
  const api2_payload = {
    start_date: '2020-03-12',
    end_date: '2020-03-16',
    nights: 4,
    guests: 4,
    adults: 2,
    children: 2,
    infants: 0,
    status: 'accepted',
    guest: {
      id: 1,
      first_name: 'Wayne',
      last_name: 'Woodbridge',
      phone: '639123456789',
      email: 'wayne_woodbridge@bnb.com',
    },
    currency: 'AUD',
    payout_price: '3800.00',
    security_price: '500',
    total_price: '4500.00',
  };

  return (
    <Box>
      <Typography variant="h2">Api2 Payload</Typography>
      <Box width="500px" display="flex" flexDirection="column" justify="center">
        <Box display="flex" py={3}>
          <Button variant="contained" color="primary" disableElevation>
            Send To Api Endpoint
          </Button>
        </Box>

        <pre
          style={{
            backgroundColor: '#eee',
            padding: '1em',
          }}
        >
          <code>{JSON.stringify(api2_payload, null, 2)}</code>
        </pre>
      </Box>
    </Box>
  );
}
