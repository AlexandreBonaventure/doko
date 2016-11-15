set :passenger_restart_with_touch, fetch(:settings)['passenger'] && fetch(:settings)['passenger']['passenger_restart_with_touch']
set :passenger_rvm_ruby_version, "#{File.open(".ruby-version", "r").read.strip}"
