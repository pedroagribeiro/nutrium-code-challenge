class Service < ApplicationRecord
  belongs_to :professional
  has_many :appointments, dependent: :destroy

  validates :price, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :professional_id, presence: true

end
