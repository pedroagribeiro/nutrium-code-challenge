class CreateAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :appointments do |t|
      t.string :email
      t.datetime :date
      t.integer :status

      t.timestamps
    end
  end
end
