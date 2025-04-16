class CreateProfessionals < ActiveRecord::Migration[8.0]
  def change
    create_table :professionals do |t|
      t.string :name
      t.integer :license_number
      t.string :address

      t.timestamps
    end
  end
end
