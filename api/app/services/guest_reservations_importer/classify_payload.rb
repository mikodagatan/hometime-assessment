module GuestReservationsImporter
  class ClassifyPayload < ApplicationService
    attr_reader :data

    def initialize(data)
      @data = data
      @keys = @data.keys
    end

    def apis
      ['api1', 'api2']
    end

    def call
      # Note: Add the name of the new api in the apis variable.
      # create a new Payload class for that api. Follow api1 and api2 format.
      apis.each do |api|
        unique_fields = "GuestReservationsImporter::#{api.capitalize}Payload"
                        .constantize
                        .unique_fields
        puts unique_fields
        return api if is_payload(unique_fields)
      end
      nil
    end

    def is_payload(payload)
      payload.each do |field|
        return true if @keys.include?(field)
      end
      false
    end
  end
end