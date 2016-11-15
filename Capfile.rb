# set :deploy_config_path, 'app/config/deploy.rb'
# set :stage_config_path, 'app/config/deploy'

# Load DSL and Setup Up Stages
require 'capistrano/setup'

# Includes default deployment tasks
require 'capistrano/deploy'

# Includes tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails/tree/master/assets
#   https://github.com/capistrano/rails/tree/master/migrations
#

require 'capistrano/ssh_doctor'
require 'capistrano/passenger'
require "airbrussh/capistrano"
require 'capistrano/rails/console'

# Environment
require 'capistrano/rvm'
require 'capistrano/bundler'
# require 'capistrano/npm'

# Rails assets
# require 'capistrano/bower'
require 'capistrano/gulp'
# require 'capistrano/rails/assets'

# require 'capistrano/faster_assets'
# import 'lib/capistrano/tasks/manual/local-precompile.cap'

# Rails db
# require 'capistrano/rails/migrations' # Require always assets before migrations
# require 'capistrano-db-tasks'

# Background processing
# require "whenever/capistrano"
# require 'capistrano/sidekiq'
# require 'capistrano/sidekiq/monit' #to require monit tasks # Only for capistrano3

# Airbrake deploy notification
#require './config/boot'
#require 'airbrake/capistrano'

# Other tasks
require 'capistrano-nc/nc'
# require 'capistrano/maintenance'
# require 'delayed/recipes'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.cap').each { |r| import r }
