class Service < ApplicationRecord

  validates :price, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :professional_id, presence: true

end
