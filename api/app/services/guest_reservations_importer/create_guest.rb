module GuestReservationsImporter
  class CreateGuest < ApplicationService
    attr_reader :attributes

    # Note: separated from Service to introduce API form validation 
    # in the future.

    def initialize(attributes)
      @attributes = attributes
    end

    def call
      guest = Guest.new
      guest.update_attributes(@attributes)
      guest.save!
      guest
    end

  end
end