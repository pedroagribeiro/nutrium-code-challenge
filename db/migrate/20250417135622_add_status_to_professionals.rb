class AddStatusToProfessionals < ActiveRecord::Migration[8.0]
  def change
    add_column :professionals, :status, :integer
  end
end
