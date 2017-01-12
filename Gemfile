source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'mysql2', '>= 0.3.18', '< 0.5'
gem 'puma', '~> 3.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'uglifier', '>= 1.3.0'

gem 'sass-rails', '~> 5.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
# gem 'compass-rails', '~> 2.0.5'
gem 'font-awesome-rails'
gem 'rails-i18n'
gem 'slim-rails'
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'json', github: 'flori/json', branch: 'v1.8'

gem "bulma-rails", "~> 0.3.0"
gem 'normalize-rails'

group :development, :test do
  gem 'awesome_print'
  gem 'bullet'
  gem 'byebug'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'guard-rspec'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'shoulda-matchers'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development do
  gem 'annotate'
  gem 'better_errors'
  # gem 'quiet_assets'
  gem 'web-console', '~> 2.0'
  gem 'rack-env_ribbon'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
