Twilio.configure do |config|
  if Rails.env.production?
    config.account_sid = 'ACd3e3af0b525302a90c9a969ae8e5520d'
    config.auth_token = '55964c3075a8b9db6cdfe22763ac6080'
  else
    config.account_sid = 'AC5f85e7b9d92cfbe37c99189606e0cf26'
    config.auth_token = '6b3613e4409faf2f8075f8af0e69ef6e'
  end
end
