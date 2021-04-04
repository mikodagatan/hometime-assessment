module GuestReservationsImporter
  class Api1Payload < Service
    # inherits Service to get status function

    attr_reader :data

    def initialize(data)
      @data = data
      @d = data['reservation']
    end

    # Note:
    # was supposed to be:
    # [
    #   'reservation',
    #   'guest_email',
    #   'listing_security_price_accurate',
    #   'host_currency'
    # ]
    # But, we are now assuming that reservation contains 
    # all of the other data
    def self.unique_fields
      ['reservation']
    end
    
    def guest_attributes
      {
        email: @d['guest_email'],
        first_name: @d['first_name'],
        last_name: @d['last_name'],
        phone_numbers: @d['guest_phone_numbers']
      }
    end

    def reservation_attributes
      # Service Payload Format 1 has incomplete brackets.
      # 'reservation' is not closed.
      # This assumes that reservation contains all of the specified
      # data.
      guest_details = @d['guest_details']
      {
        api_used: 'api1',
        api_guest_id: @d['guest_id'],
        date_start: @d['start_date'].to_date,
        date_end: @d['end_date'].to_date,
        currency: @d['host_currency'],
        status: find_status, # from Service
        nights: @d['nights'],
        guests: @d['number_of_guests'].to_i,
        adults: guest_details['number o'].to_i,
        children: guest_details['number_of_children'].to_i,
        infants: guest_details['number_of_infants'].to_i,
        payout_price: @d['expected_payout_amount'].to_d,
        security_price: @d['listing_security_price_accurate'].to_d,
        total_price: @d['total_paid_amount_accurate'].to_d,
      }
    end
  end
end