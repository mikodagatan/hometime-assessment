module GuestReservationsImporter
  class Api2Payload < Service
    # inherits Service to get status function

    attr_reader :data

    def initialize(data)
      @data = data
      @d = data
      @guest = @data['guest']
    end

    def self.unique_fields
      [
        'nights',
        'guest',
        'security_price',
        'currency'
      ]
    end

    def guest_attributes
      {
        email: @guest['email'],
        first_name: @guest['first_name'],
        last_name: @guest['last_name'],
        phone_numbers: [@guest['phone']], # assumes single number string
      }
    end

    def reservation_attributes
      {
        api_used: 'api2',
        api_guest_id: @guest['id'],
        date_start: @d['start_date'].to_date,
        date_end: @d['end_date'].to_date,
        currency: @d['currency'],
        status: find_status, #from Service
        nights: @d['nights'],
        guests: @d['guests'].to_i,
        adults: @guest['adults'].to_i,
        children: @guest['children'].to_i,
        infants: @guest['infants'].to_i,
        payout_price: @d['payout_price'].to_d,
        security_price: @d['security_price'].to_d,
        total_price: @d['total_price'].to_d,
      }
    end
  end
end