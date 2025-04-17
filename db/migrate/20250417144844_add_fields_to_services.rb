class AddFieldsToServices < ActiveRecord::Migration[8.0]
  def change
    add_column :services, :name, :string
  end
end
