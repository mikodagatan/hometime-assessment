module GuestReservationsImporter
  class CreateReservation < ApplicationService
    attr_reader :attributes, :guest

    # Note: separated from Service to introduce API form validation 
    # in the future.

    def initialize(attributes, guest)
      @attributes = attributes
      @guest = guest
    end

    def call
      reservation = Reservation.new
      reservation.update_attributes(@attributes)
      reservation.guest = guest
      reservation.save!
      reservation
    end

  end
end