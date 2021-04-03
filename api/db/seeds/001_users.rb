require 'faker'

User.create(
  email: 'admin@email.com',
  password: 'admin123',
  password_confirmation: 'admin123'
)

10.times do |i|
  User.create(
    email: "email#{i}@email.com",
    password: 'pass123',
    password_confirmation: 'pass123'
  )
end