module SpecTestHelper
  def login_by_admin
    @admin = create(:admin)
    sign_in(@admin)
  end

  def logout
    sign_out
  end
end
