class AddNameToAppointment < ActiveRecord::Migration[8.0]
  def change
    add_column :appointments, :name, :string
  end
end
