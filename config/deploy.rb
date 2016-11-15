# cap deploy -S branch=awesome-new-feature

load 'lib/capistrano/config/deploy.defaults.rb'

load 'lib/capistrano/config/environment.rb'
load 'lib/capistrano/config/rvm.rb'
load 'lib/capistrano/config/bundle.rb'
load 'lib/capistrano/config/git.rb'
load 'lib/capistrano/config/passenger.rb'
load 'lib/capistrano/config/rails.rb'
load 'lib/capistrano/config/gulp.rb'
