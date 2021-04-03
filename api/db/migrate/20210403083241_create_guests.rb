class CreateGuests < ActiveRecord::Migration[5.2]
  def change
    create_table :guests do |t|
      t.string        :first_name
      t.string        :middle_name
      t.string        :last_name
      t.string        :address
      t.references    :user
      t.timestamps
    end

    add_index :guests, [:first_name, :middle_name, :last_name]
  end
end
