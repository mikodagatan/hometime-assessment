require 'test_helper'
require 'mock_helper'

class GuestReservationsImporterTest < ActiveSupport::TestCase
  # Note: add new api name here
  # Add mock data in mock_helper.rb
  apis = ['api1', 'api2']

  apis.each do |api|
    test "#{api}_payload: create guest and reservation" do
      ::GuestReservationsImporter::Service
        .call(self.send("#{api}_payload"))

      assert Guest.all.size == 1
      assert Reservation.all.size == 1
      assert Reservation.first.guest == Guest.first
    end
  end

end