require 'faker'

Guest.all.each do |guest|
  next if [true, false].sample
  api_used = ['api1', 'api2'].sample
  id = Faker::Internet.password(min_length: 12, max_length: 12)
  nights = rand(1..14)
  date_start = Faker::Date.between(
    from: Date.today, 
    to: Date.today.months_since(2)
  )
  adults = rand(1..4)
  children = rand(0..6)
  infants = rand(0..3)
  payout_price = 100 * rand(1..100)
  security_price = 100 * rand(1..5)
  
  
  reservation = Reservation.new(
    guest: guest,
    api_used: api_used,
    api_guest_id: "#{api_used}_#{id}",
    date_start: date_start,
    date_end: date_start + nights.day,
    currency: Faker::Currency.code,
    status: Reservation::STATUSES.sample,
    nights: nights,
    guests: adults + children + infants,
    adults: adults,
    children: children,
    infants: infants,
    payout_price: payout_price,
    security_price: security_price,
    total_price: payout_price + security_price
  )
  reservation.save!
end

