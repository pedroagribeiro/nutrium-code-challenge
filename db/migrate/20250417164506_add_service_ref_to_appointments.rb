class AddServiceRefToAppointments < ActiveRecord::Migration[8.0]
  def change
    add_reference :appointments, :service, null: false, foreign_key: true
  end
end
