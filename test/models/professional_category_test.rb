require "test_helper"

class ProfessionalCategoryTest < ActiveSupport::TestCase

  # test the association with professionals
  test "should have many profissionals" do
    category = ProfessionalCategory.new
    assert_respond_to category, :professionals
  end
end
