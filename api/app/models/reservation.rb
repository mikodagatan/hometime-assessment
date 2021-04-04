class Reservation < ApplicationRecord
  belongs_to  :guest

  STATUSES = [
    'accepted', 'declined', 'pending_payment', 'for_approval'
  ]
end
