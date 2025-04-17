class Professional < ApplicationRecord
  after_initialize :set_default_status, if: :new_record?

  validates :name, presence: true, length: { maximum: 100 }
  validates :order_number, presence: true, numericality: { only_integer: true }

  private
    def set_default_status
      self[:status] ||= :pending
    end
end
