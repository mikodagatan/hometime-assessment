module GuestReservationsImporter
  class Service < ApplicationService
    attr_reader :data

    def initialize(data)
      @data = data
    end

    def call
      # Note: uses dynamic class calling.
      # Note: creates a new instance of the payload class.
      api_used = ClassifyApi.call(@data)

      payload = "ImportPayloads::#{api_used.capitalize}Payload"
                .constantize
                .new(@data)
      
      reservation = nil # have to be defined to be able to return it.
      ActiveRecord::Base.transaction do
        guest = CreateGuest.call(payload.guest_attributes)
        reservation = CreateReservation.call(payload.reservation_attributes, guest)
      end

      reservation   
    end

  end
end