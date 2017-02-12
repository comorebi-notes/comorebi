class AdminController < ApplicationController
  layout 'admin'
  before_action :authenticate_admin!
  before_action :set_notification

  def show
  end

  private

  def set_notification
    @notification = {
      message: notice || alert,
      type: notification_type
    }
  end

  def notification_type
    if notice
      return :notice
    elsif alert
      return :alert
    end
  end
end
