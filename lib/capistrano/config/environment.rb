###### Environment
set :default_env, { path: fetch(:settings, {})['env'] && fetch(:settings)['env']['path'], rails_env: fetch(:rails_env, fetch(:stage))  }
set :tmp_dir, "/tmp"
set :pty, false
# set :rake , '/vol0/local/ruby/bin/rake'
# additional settings
# ssh_options[:forward_agent] = true # authorizes the server to access the Git repository
# ssh_options[:keys] = %w(/home/user/.ssh/id_rsa) # If you are using ssh_keysset :chmod755, "app config db lib public vendor script script/* public/disp*"set :use_sudo, false
