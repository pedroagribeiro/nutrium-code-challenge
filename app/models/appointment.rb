class Appointment < ApplicationRecord
  belongs_to :professional
  belongs_to :service

  validates :email, presence: true
  validates :date, presence: true
  validates :professional_id, presence: true
  validates :service_id, presence: true

  # Commented because the rules that follows is unusable if this one is enabled
  # validate :no_pending_appointment_for_same_email, on: :create

  after_update :reject_other_appointments_on_same_date, if: :saved_change_to_status?

  private
    def no_pending_appointment_for_same_email
      if Appointment.exists?(email: email, status: 0)
        errors.add(:base, "There is already one pending appointment for the referenced email")
      end
    end

    def reject_other_appointments_on_same_date
      return unless status == 1

      Appointment
        .where(date: date, status: 0)
        .where.not(id: id)
        .update_all(status: 2)
    end
end
