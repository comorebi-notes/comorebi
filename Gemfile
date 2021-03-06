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
gem 'font-awesome-rails'
gem 'rails-i18n'
gem 'slim-rails'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'json', github: 'flori/json', branch: 'v1.8'
gem 'seed-fu'
gem 'rails-controller-testing'
gem 'react-rails'

# admin tools
gem 'rails_admin'
gem 'rails_admin-i18n'

# CSS
gem 'bulma-rails', '~> 0.4.0'
# gem 'compass-rails'

# authentication
gem 'devise'
gem 'devise-i18n'

# tags
gem 'acts-as-taggable-on'

# for uploader with AWS S3
gem 'carrierwave'
gem 'fog-aws'

# for environment variables
gem 'dotenv-rails'

group :development, :test do
  gem 'awesome_print'
  gem 'bullet'
  gem 'byebug'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem "faker"
  gem 'guard-rspec'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'rails-erd'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'shoulda-matchers'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development do
  gem 'annotate'
  gem 'better_errors'
  gem 'foreman'
  gem 'web-console', '~> 2.0'
  gem 'html2slim'
end

# for Heroku
source 'https://rubygems.org'
ruby '2.3.3'
gem 'rails_12factor', group: :production

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
