#### RVM
set :rvm_ruby_version, "#{File.open(".ruby-version", "r").read.strip}@#{File.open(".ruby-gemset", "r").read.strip}"
# set :rvm_type, :user
# set :rvm_custom_path, '~/.myveryownrvm'
# cap production rvm:check
# before :my_custom_task, 'rvm:hook'