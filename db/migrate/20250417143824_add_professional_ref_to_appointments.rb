class AddProfessionalRefToAppointments < ActiveRecord::Migration[8.0]
  def change
    add_reference :appointments, :professional, null: false, foreign_key: true
  end
end
