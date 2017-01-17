require 'rails_helper'

RSpec.describe AdminsController, type: :controller do
  it "GET #show without login" do
    get :show
    expect(response).to redirect_to new_admin_session_path
  end

  it "GET #show with login" do
    login_by_admin
    get :show
    expect(response).to render_template :show
  end
end
