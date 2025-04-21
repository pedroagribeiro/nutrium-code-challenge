require "test_helper"

class ServiceTest < ActiveSupport::TestCase
  setup do
    @category = professional_categories(:one)
    @professional = professionals(:one)
    @service = services(:one)
  end

  # Validation
  test "should be valid with valid attributes" do
    assert @service.valid?
  end

  test "should be invalid without name" do
    @service.name = nil
    assert_not @service.valid?
    assert_includes @service.errors[:name], "can't be blank"
  end

  test "should be invalid without price" do
    @service.price = nil
    assert_not @service.valid?
    assert_includes @service.errors[:price], "can't be blank"
  end

  test "should be invalid without address" do
    @service.address = nil
    assert_not @service.valid?
    assert_includes @service.errors[:address], "can't be blank"
  end

  test "should be invalid without city" do
    @service.city = nil
    assert_not @service.valid?
    assert_includes @service.errors[:city], "can't be blank"
  end

  test "should be invalid without professional" do
    @service.professional = nil
    assert_not @service.valid?
    assert_includes @service.errors[:professional], "must exist"
  end

  # Associations
  test "should belong to professional" do
    assert_respond_to @service, :professional
  end

  test "should have many appointments" do
    assert_respond_to @service, :appointments
  end

  # Methods
  test "as_indexed_json returns expected structure" do
    expected = {
      "name" => "Online Follow-Up",
      "address" => "Rua dos Chãos",
      "city" => "Braga"
    }
    assert_equal expected, @service.as_indexed_json
  end
end
