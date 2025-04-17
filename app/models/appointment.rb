class Appointment < ApplicationRecord
  after_initialize :set_default_status, if: :new_record?

  enum status: { pending: 0, accepted: 1, rejected: 2 }

  validates :email, presence: true
  validates :date, presence: true
  validates :professional_id, presence: true

  private
    def set_default_status
      self.status ||= :pending
    end
end
