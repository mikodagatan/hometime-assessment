class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.references      :guest
      t.string          :api_used
      t.integer         :api_guest_id

      # date_start and date_end used in order to avoid difficulties in writing
      # code in atom and vscode

      t.date            :date_start
      t.date            :date_end

      t.string          :currency
      t.string          :status

      t.integer         :nights
      t.integer         :guests
      t.integer         :adults
      t.integer         :children
      t.integer         :infants

      t.decimal         :payout_price, precision: 10, scale: 2
      t.decimal         :security_price, precision: 10, scale: 2
      t.decimal         :total_price, precision: 10, scale: 2

      t.timestamps
    end

    add_index :reservations, [:api_used, :api_guest_id]
  end
end
