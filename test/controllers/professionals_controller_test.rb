require "test_helper"

class ProfessionalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category = professional_categories(:one)
    @professional = professionals(:one)
  end

  test "should get index with cache" do
    get professionals_url
    assert_response :success
  end

  test "should show professional" do
    get professional_url(@professional)
    assert_response :success
  end

  # test "should create professional" do
  #   assert_difference("Professional.count") do
  #     post professionals_url, params: {
  #       professional: {
  #         name: "John Test",
  #         license_number: 67890,
  #         professional_category_id: @category.id
  #       }
  #     }
  #   end

  #   assert_redirected_to professional_path(Professional.last)
  # end

  # test "should not create invalid professional" do
  #   post professionals_url, params: { professional: { name: "", license_number: nil } }
  #   assert_response :unprocessable_entity
  # end

  # test "should update professional" do
  #   patch professional_url(@professional), params: {
  #     professional: {
  #       name: "John Updated"
  #     }
  #   }
  #   assert_redirected_to professional_path(@professional.reload)
  # end
end
