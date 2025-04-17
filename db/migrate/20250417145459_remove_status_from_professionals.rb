class RemoveStatusFromProfessionals < ActiveRecord::Migration[8.0]
  def change
    remove_column :professionals, :status, :integer
  end
end
