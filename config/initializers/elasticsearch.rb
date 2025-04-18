Elasticsearch::Model.client = Elasticsearch::Client.new(
  url: 'http://localhost:9200',
  log: true
)

# if Rails.env.development? || Rails.env.test?
#   Professional.create_index unless Professional.__elasticsearch__.index_exists?
#   Service.create_index unless Service.__elasticsearch__.index_exists?
# end