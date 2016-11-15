####### Git
set :scm, :git
set :repo_url, fetch(:settings)['git']['url']
set :branch, fetch(:settings)['git']['branch']
# set :branch, :master # This infos goes now in env config file config/deploy/evn.rb
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }
# set :scm_username, 'grandduc'
# set :scm_passphrase, ''
# set :git_enable_submodules, 1 #if you have vendored rails
# set git_shallow_clone, 1
# set :scm_verbose, true
# $ cap staging git:check