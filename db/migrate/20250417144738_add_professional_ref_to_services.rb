class AddProfessionalRefToServices < ActiveRecord::Migration[8.0]
  def change
    add_reference :services, :professional, null: false, foreign_key: true
  end
end
