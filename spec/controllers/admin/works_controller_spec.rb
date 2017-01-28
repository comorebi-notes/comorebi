require 'rails_helper'

describe Admin::WorksController, type: :controller do
  it "GET #index without login" do
    get :index
    expect(response).to redirect_to new_admin_session_path
  end

  it "GET #index with login" do
    login_by_admin
    get :index
    expect(response).to render_template :index
  end
end
