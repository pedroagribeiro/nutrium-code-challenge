class Appointment < ApplicationRecord
  belongs_to :professional
  belongs_to :service

  validates :email, presence: true
  validates :date, presence: true
  validates :professional_id, presence: true
  validates :service_id, presence: true

end
