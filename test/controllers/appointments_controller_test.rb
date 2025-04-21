require "test_helper"

class AppointmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @professional = professionals(:one)
    @service = services(:one)
    @appointment = appointments(:one)
  end

  test "should get index" do
    get appointments_path
    assert_response :success
  end

  test "should get index with filters" do
    get appointments_path, params: { professional_id: @professional.id, status: 0 }
    assert_response :success
  end

  test "should create appointment" do
    assert_difference("Appointment.count") do
      post appointments_path, params: {
        appointment: {
          name: "John Paciente Doe",
          email: "johnpacientdoe@example.com",
          date: Date.today + 2.days,
          professional_id: @professional.id,
          service_id: @service.id
        }
      }
    end

    assert_response :created
  end

  test "should not create invalid appointment" do
    assert_no_difference("Appointment.count") do
      post appointments_path, params: {
        appointment: {
          name: "",
          email: "",
          date: nil,
          professional_id: nil,
          service_id: nil
        }
      }
    end

    assert_response :unprocessable_entity
  end

  test "should update appointment status" do
    patch appointment_path(@appointment), params: {
      appointment: {
        status: 1
      }
    }

    assert_response :success
    @appointment.reload
    assert_equal 1, @appointment.status
  end

  test "should not update with empty params" do
    patch appointment_path(@appointment), params: {
      appointment: {}
    }

    assert_response :bad_request
  end

  test "should return not found if appointment does not exist" do
    patch appointment_path(999_999), params: {
      appointment: {
        status: 1
      }
    }

    assert_response :not_found
  end
end
