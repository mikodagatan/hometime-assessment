import { Typography, Box, Button } from '@material-ui/core';

export default function Api2() {
  const api1_payload = {
    reservation: {
      start_date: '2020-03-12',
      end_date: '2020-03-16',
      expected_payout_amount: '3800.00',
      guest_details: {
        localized_description: '4 guests',
        number_of_adults: 2,
        number_of_children: 2,
        number_of_infants: 0,
      },
      guest_email: 'wayne_woodbridge@bnb.com',
      guest_first_name: 'Wayne',
      guest_id: 1,
      guest_last_name: 'Woodbridge',
      guest_phone_numbers: ['639123456789', '639123456789'],
      listing_security_price_accurate: '500.00',
      host_currency: 'AUD',
      nights: 4,
      number_of_guests: 4,
      status_type: 'accepted',
      total_paid_amount_accurate: '4500.00',
    },
  };

  return (
    <Box>
      <Typography variant="h2">Api1 Payload</Typography>
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
          <code>{JSON.stringify(api1_payload, null, 2)}</code>
        </pre>
      </Box>
    </Box>
  );
}
