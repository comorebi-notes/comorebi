module SpecTestHelper
  def login_by_admin
    @admin = FactoryGirl.create(:admin)
    sign_in @admin
  end
end