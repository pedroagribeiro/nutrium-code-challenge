require "test_helper"
require "minitest/mock"

class ProfessionalTest < ActiveSupport::TestCase
  setup do
    @category = professional_categories(:one)
    @professional = professionals(:one)
  end

  # Validations
  test "should be valid with valid attributes" do
    assert @professional.valid?
  end

  test "should not be valid without a name" do
    @professional.name = nil
    assert_not @professional.valid?
  end

  test "should not be valid with a name longer than 100 characters" do
    @professional.name = 'a' * 101
    assert_not @professional.valid?
  end

  test "should not be valid without a license number" do
    @professional.license_number = nil
    assert_not @professional.valid?
  end

  test "should not be valid with a non-integer license number" do
    @professional.license_number = 'abcd'
    assert_not @professional.valid?
  end

  test "should not be valid without a professional category" do
    @professional.professional_category_id = nil
    assert_not @professional.valid?
  end

  # Associations
  test "should have many services" do
    assert_respond_to @professional, :services
  end

  test "should have many appointments" do
    assert_respond_to @professional, :appointments
  end

  test "should belong to professional category" do
    assert_respond_to @professional, :professional_category
  end

  # Methods
  test "should return service names" do
    assert_equal [services(:one).name], @professional.service_names
  end

  test "should return the correct indexed JSON" do
    expected_json = { 'name' => @professional.name, 'license_number' => @professional.license_number, 'service_names' => [services(:one).name] }
    assert_equal expected_json, @professional.as_indexed_json
  end

end