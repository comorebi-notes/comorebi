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
      level: notification_level
    }
  end

  def notification_level
    if notice
      return :info
    elsif alert
      return :error
    end
  end
end
