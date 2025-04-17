class Appointment < ApplicationRecord
  belongs_to :professional

  validates :email, presence: true
  validates :date, presence: true
  validates :professional_id, presence: true
  validates :service_id, presence: true

end
