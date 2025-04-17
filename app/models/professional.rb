class Professional < ApplicationRecord

  validates :name, presence: true, length: { maximum: 100 }
  validates :license_number, presence: true, numericality: { only_integer: true }
  validates :professional_category_id, presence: true

end
