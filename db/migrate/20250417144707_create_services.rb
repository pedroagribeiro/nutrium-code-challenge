class CreateServices < ActiveRecord::Migration[8.0]
  def change
    create_table :services do |t|
      t.float :price
      t.string :address
      t.string :city

      t.timestamps
    end
  end
end
