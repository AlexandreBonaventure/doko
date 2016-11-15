# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
require 'fileutils'
require 'yaml'
require 'hashie/mash'
require 'rails/railtie'

class SecretsInitializer < ::Rails::Railtie
  initializer 'secrets.initializer' do |app|
    secrets = Hashie::Mash.new()

    yaml = File.expand_path('../../secrets.yml', __FILE__)

    if File.exist?(yaml)
      require "erb"
      all_secrets = YAML.load(ERB.new(IO.read(yaml)).result) || {}
      env_secrets = all_secrets[Rails.env]
      secrets.merge!(env_secrets) if env_secrets
    end


    Rails.application.secrets = secrets
    Rails.application.secrets.secret_key_base = Rails.application.secrets.app.secret_key_base
  end
end
