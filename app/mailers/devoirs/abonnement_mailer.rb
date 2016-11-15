module Devoirs
  class AbonnementMailer < ApplicationMailer

    # Subject can be set in your I18n file at config/locales/en.yml
    # with the following lookup:
    #
    #   en.devoirs.abonnement_mailer.nouveaute.subject
    #
    def nouveaute(bulletin)
#      @greeting = "Hi"

      @bulletin = bulletin
      @data = bulletin.data

      mail to: @bulletin.email, subject: @data[:titre]
    end
  end
end