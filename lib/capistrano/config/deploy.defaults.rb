require File.expand_path('config/initializers/globals')

Global.configure do |config|
  config.environment = fetch(:stage).to_s
  config.config_directory = File.expand_path('config/global/deploy').to_s
end

###### Deploy config
set :settings, Global.configuration
set :application, fetch(:settings)['project']
set :application_dir, fetch(:settings)['application_dir']
set :deploy_to, fetch(:application_dir)

set :log_level, fetch(:settings)['log_level']
set :keep_releases, fetch(:settings)['keep_releases']
set :linked_files, fetch(:linked_files, []).push(*fetch(:settings)['linked_files'])
set :linked_dirs, fetch(:linked_dirs, []).push(*fetch(:settings)['linked_dirs'])
set :assets_dependencies, fetch(:assets_dependencies, []).push(*fetch(:settings)['assets_dependencies'])
set :format, fetch(:settings)['format'] if fetch(:settings)['format']



