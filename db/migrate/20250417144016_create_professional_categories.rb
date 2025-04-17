class CreateProfessionalCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :professional_categories do |t|
      t.string :name

      t.timestamps
    end
  end
end
