class RemoveAddressFromProfessionals < ActiveRecord::Migration[8.0]
  def change
    remove_column :professionals, :address, :string
  end
end
