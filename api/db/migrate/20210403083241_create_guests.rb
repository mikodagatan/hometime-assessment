class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string          :email, null: false
      t.string          :first_name
      t.string          :last_name
      t.string          :phone_numbers, array: true
      t.references      :user

      t.timestamps
    end

    add_index :guests, [:first_name, :last_name]
    add_index :guests, :email
  end
end
