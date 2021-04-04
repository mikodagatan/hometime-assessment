require 'faker'

# WHY: added complication to amount of phone numbers and guests 
# to better test dev env code.
def create_phone_number
  numbers = []
  amount_of_numbers = rand(0..3)
  amount_of_numbers.times do
    kind_of_number = ['phone_number', 'cell_phone'].sample
    numbers << Faker::PhoneNumber.send(kind_of_number)
  end
  numbers
end

rand(1..40).times do
  guest = Guest.new(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_numbers: create_phone_number
  )
  guest.save!
end
