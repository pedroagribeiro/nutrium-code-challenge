class Service < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  belongs_to :professional
  has_many :appointments, dependent: :destroy

  settings do
    mappings dynamic: false do
      indexes :name, type: 'text', analyzer: 'standard'
      indexes :address, type: 'text', analyzer: 'standard'
      indexes :city, type: 'text', analyzer: 'standard'
    end
  end

  validates :price, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :professional_id, presence: true

  def create_index
    unless Service.__elasticsearch__.index.exists?
      Service.__elasticsearch__.create_index!
    end
  end

  def as_indexed_json(options = {})
    as_json(
      only: [:name, :address, :city],
    )
  end

end
