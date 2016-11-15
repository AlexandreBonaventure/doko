require 'twilio-ruby'

class TwilioService

  attr_accessor :engin, :from

  def initialize()
    self.engin = Twilio::REST::Client.new
    self.from = Rails.env.production? ? '+14387938714' : '+15005550006'
  end

  def envoie(numero, message)
    self.engin.account.messages.create({
      from: from,
      to: numero,
      body: message
    })
  end

end
