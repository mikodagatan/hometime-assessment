require 'faker'

# WHY: added complication to amount of phone numbers and guests 
# to better test code.
def create_phone_number
  numbers = []
  amount_of_numbers = rand(0..3)
  amount_of_numbers.times do
    kind_of_number = ['phone_number', 'cell_phone'].sample
    numbers << Faker::PhoneNumber.send(kind_of_number)
  end
  numbers
end

User.all.each do |user|
  rand(1..10).times do
    guest = user.guests.build(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_numbers: create_phone_number
  )
  guest.save!
  end
end
