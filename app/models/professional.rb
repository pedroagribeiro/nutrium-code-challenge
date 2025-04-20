require 'elasticsearch/model'

class Professional < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  after_create :index_to_elasticsearch

  has_many :services, dependent: :destroy
  has_many :appointments, dependent: :destroy
  belongs_to :professional_category

  settings do
    mappings dynamic: false do
      indexes :name, type: 'text', analyzer: 'standard'
      indexes :license_number, type: 'text', analyzer: 'standard'
      indexes :service_names, type: 'text', analyzer: 'standard'
    end
  end

  validates :name, presence: true, length: { maximum: 100 }
  validates :license_number, presence: true, numericality: { only_integer: true }
  validates :professional_category_id, presence: true

  def index_to_elasticsearch
    __elasticsearch__.index_document
  end

  def service_names
    services.pluck(:name)
  end

  def create_index
    unless Professional.__elasticsearch__.index.exists?
      Professional.__elasticsearch__.create_index!
    end
  end

  def as_indexed_json(options = {})
    as_json(
      only: [:name, :license_number],
      methods: [:service_names]
    )
  end

  def self.search_by_name_services_and_license_number(query)
    __elasticsearch__.search(
      # query: {
      #   multi_match: {
      #     query: query,
      #     fields: ['name^2', 'service_names', 'license_number'],
      #   }
      # }
      query: {
          bool: {
          should: [
            { wildcard: { name: "*#{query.downcase}*" } },
            { wildcard: { service_names: "*#{query.downcase}*" } },
            { wildcard: { license_number: "*#{query.downcase}*" } }
          ]
        }
      }
    )
  end
end
