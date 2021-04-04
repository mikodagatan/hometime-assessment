module GuestReservationsImporter
  class Service < ApplicationService
    attr_reader :data

    def initialize(data)
      @data = data.deep_stringify_keys!
    end

    def call
      # Note: uses dynamic class calling.
      # Note: creates a new instance of the payload class.
      api_used = ClassifyPayload.call(@data)
      puts "data: #{@data}"

      payload = "GuestReservationsImporter::#{api_used.capitalize}Payload"
                .constantize
                .new(@data)
      puts "payload: #{payload.inspect}"
      
      ActiveRecord::Base.transaction do
        guest = CreateGuest.call(payload.guest_attributes)
        reservation = CreateReservation.call(payload.reservation_attributes, guest)
      end

      reservation      
    end

    def find_status
      status = @data['status'] || @data['status_type']
      case status
      when 'accepted'
        'reserved'
      when 'declined'
        status
      when 'pending_payment'
        status
      when 'pending_acceptance'
        'for_approval'
      when 'pending_approval'
        'for_approval'
      end
    end

  end
end