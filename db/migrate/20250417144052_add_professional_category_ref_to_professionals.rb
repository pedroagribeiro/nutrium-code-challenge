class AddProfessionalCategoryRefToProfessionals < ActiveRecord::Migration[8.0]
  def change
    add_reference :professionals, :professional_category, null: false, foreign_key: true
  end
end
