require 'elasticsearch/model'

class Professional < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  has_many :services, dependent: :destroy
  has_many :appointments, dependent: :destroy
  belongs_to :professional_category

  validates :name, presence: true, length: { maximum: 100 }
  validates :license_number, presence: true, numericality: { only_integer: true }
  validates :professional_category_id, presence: true

end
