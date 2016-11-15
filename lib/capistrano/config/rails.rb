## Rails
set :rails_env, fetch(:stage)                # If the environment differs from the stage name
# set :migration_role, 'migrator'            # Defaults to 'db'
# set :conditionally_migrate, true           # Defaults to false
# set :assets_roles, [:web, :app]            # Defaults to [:web]
# set :assets_prefix, 'prepackaged-assets'   # Defaults to 'assets' this should match config.assets.prefix in your rails config/application.rb
# set :normalize_asset_timestamps, %{public/images public/javascripts public/stylesheets} # If you need to touch public/images, public/javascripts and public/stylesheets on each deploy


# $ cap deploy:migrate
# $ cap deploy:compiler_assets
# $ cap deploy:normalise_assets
