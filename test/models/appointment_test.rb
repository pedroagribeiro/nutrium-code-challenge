require "test_helper"

class AppointmentTest < ActiveSupport::TestCase
  setup do
    @category = professional_categories(:one)
    @professional = professionals(:one)
    @service = services(:one)
    @appointment = appointments(:one)
  end

  # Validations
  test "should be valid with valid attributes" do
    assert @appointment.valid?
  end

  test "should be invalid without email" do
    @appointment.email = nil
    assert_not @appointment.valid?
    assert_includes @appointment.errors[:email], "can't be blank"
  end

  test "should be invalid without date" do
    @appointment.date = nil
    assert_not @appointment.valid?
    assert_includes @appointment.errors[:date], "can't be blank"
  end

  test "should be invalid without professional" do
    @appointment.professional = nil
    assert_not @appointment.valid?
    assert_includes @appointment.errors[:professional], "must exist"
  end

  test "should be invalid without service" do
    @appointment.service = nil
    assert_not @appointment.valid?
    assert_includes @appointment.errors[:service], "must exist"
  end

  # Associations
  test "should belong to professional" do
    assert_respond_to @appointment, :professional
  end

  test "should belong to service" do
    assert_respond_to @appointment, :service
  end

  # After update (one of the rules of the application)
  test "should reject the pending appointments for the same time after accepting one" do
    pending_1 = Appointment.create!(
      email: "a@example.com",
      date: Date.today + 2.days,
      status: 0,
      professional: @professional,
      service: @service
    )
    
    pending_2 = Appointment.create!(
      email: "b@example.com",
      date: Date.today + 2.days,
      status: 0,
      professional: @professional,
      service: @service
    )

    confirmed = Appointment.create!(
      email: "c@example.com",
      date: Date.today + 2.days,
      status: 0,
      professional: @professional,
      service: @service
    )

    confirmed.update!(status: 1)

    assert_equal 3, Appointment.where(date: confirmed.date).count
    assert_equal 2, Appointment.where(date: confirmed.date, status: 2).count
    assert_equal 1, Appointment.where(date: confirmed.date, status: 1).count
  end

  # test for the commented rule
  # test "should not allow more than one pending appointment for the same email" do
  #   Appointment.create!(
  #     email: "cliente@example.com",
  #     date: Date.today + 3.days,
  #     status: 0,
  #     professional: @professional,
  #     service: @service
  #   )

  #   new_appointment = Appointment.new(
  #     email: "cliente@example.com",
  #     date: Date.today + 4.days,
  #     status: 0,
  #     professional: @professional,
  #     service: @service
  #   )

  #   new_appointment.validate
  #   assert new_appointment.errors[:base].any?, "Expected a base error due to duplicate pending appointment"
  # end
end
