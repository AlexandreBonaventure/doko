source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
gem 'rails-api'

# Configuration and Settings
gem 'global'                        # Manage environment specific Rails settings

# Database
gem 'pg'                            # Use postgres as the database for Active Record

gem "responders"
gem 'jbuilder'

gem 'twilio-ruby'
gem 'phony_rails'

gem 'bitly'                       # A ruby wrapper for the bit.ly API
gem 'memoist'

gem 'simple_enum'

gem 'whenever', :require => false  # Cron jobs in Ruby

# Core extensions
gem 'hashie', require: false        # Useful Hash extensions

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  gem 'letter_opener_web'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  ## Deployment
  gem 'capistrano'                                  # Remote multi-server automation tool
  gem 'capistrano-ssh-doctor', require: false       # Quickly troubleshoot capistrano issues related to SSH
  gem 'capistrano-rvm', require: false              # Idiomatic rvm support for Capistrano 3.x
  gem 'capistrano-bundler', require: false          # Bundler support for Capistrano 3.x
  gem 'capistrano-npm', require: false              # Capistrano extension for npm
  gem 'capistrano-bower', require: false            # Capistrano extension for bower
  gem 'capistrano-gulp', require: false              # Idiomatic rvm support for Capistrano 3.x
  gem 'capistrano-passenger', require: false        # Passenger support for Capistrano 3.x
  gem 'capistrano-nc', require: false               # Capistrano integration with Mountain Lion's Notification Center
  gem 'capistrano-rails-console', require: false    # Capistrano plugin which adds a remote rails console
  gem 'airbrussh', require: false                   # Airbrussh pretties up your SSHKit and Capistrano output
end
