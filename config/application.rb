require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Comorebi
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.active_record.default_timezone = :local
    config.time_zone = 'Tokyo'
    config.i18n.default_locale = :ja
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]

    config.generators do |g|
      g.assets false
      g.helper false
      g.template_engine = :slim
      g.test_framework :rspec, view_specs: false, routing_specs: false
    end

    config.to_prepare do
      DeviseController.respond_to :html, :json, :js
    end

    # エラー時にクラスを付与
    config.action_view.field_error_proc = Proc.new do |html_tag, instance|
      Nokogiri::HTML.fragment(html_tag).search('input', 'textarea', 'select', 'label').add_class('is-danger').to_html.html_safe
    end
  end
end
