import Payload from './Payload';

export default function Api2() {
  const payload = {
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

  return <Payload title="Api2" payload={payload} />;
}
