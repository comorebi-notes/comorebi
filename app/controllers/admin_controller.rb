class AdminController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!

  def show
    @notification = {
      notice: notice,
      alert: alert
    }
  end
end
