require 'faker'

Appointment.destroy_all
Service.destroy_all
Professional.destroy_all
ProfessionalCategory.destroy_all

if Professional.__elasticsearch__.index_exists?
  puts "Deleting existing professionals index..."
  Professional.__elasticsearch__.client.indices.delete index: Professional.index_name
end

puts "Creating professionals index with correct mappings..."
Professional.__elasticsearch__.create_index!

if Service.__elasticsearch__.index_exists?
  puts "Deleting existing services index..."
  Service.__elasticsearch__.client.indices.delete index: Service.index_name
end

puts "Creating services index with correct mappings..."
Service.__elasticsearch__.create_index!

# Professional categories

ProfessionalCategory.create([
  { name: 'Nutritionist' },
  { name: 'Dietist' }
])

p "Created #{ProfessionalCategory.count} professional categories"

# Professionals
# Create 100 different professionals

100.times do
  Professional.create(
    name: Faker::Name.name,
    license_number: Faker::Number.number(digits: 5),
    professional_category_id: ProfessionalCategory.pluck(:id).sample
  )

end

p "Created #{Professional.count} professionals"

# Services
# Create 300 services (3 per professional [in average])

300.times do
  Service.create(
    name: Faker::Company.name,
    price: Faker::Commerce.price,
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    professional_id: Professional.pluck(:id).sample
  )
end

p "Created #{Service.count} services"

# Appointments
# Create 300 appointments (3 per professional [in average])

300.times do
  professional = Professional.find(Professional.pluck(:id).sample)
  service = professional.services.sample

  next unless service.present?

  Appointment.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    date: Faker::Time.between(from: DateTime.now, to: DateTime.now + 30),
    status: Faker::Number.between(from: 0, to: 2),
    professional_id: professional.id,
    service_id: service&.id
  )

  professional.__elasticsearch__.index_document if professional.persisted?
end

p "Created #{Appointment.count} appointments"