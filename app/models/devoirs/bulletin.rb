require 'memoist'
module Devoirs
  class Bulletin < ActiveRecord::Base
    extend Memoist

    # validates :email, :presence => true
    validates :email, uniqueness: { case_sensitive: false, scope: [:groupe_cd] }, if: "email.present?"
    validates :email, format: { with: /\A.+@.+\z/ }, if: "email.present?"
    validates :telephone, uniqueness: { case_sensitive: false, scope: [:groupe_cd] }, if: "telephone.present?"
    validates :telephone, :phony_plausible => true
    phony_normalize :telephone, :default_country_code => 'US'

    as_enum :groupe, {
      les_devoirs: 0,
      trois_jours: 1,
    }

    default_scope { self.trois_jours }

    attr_accessor :sms_engin, :data

    DATA = [
      {
        cle: "6bbe5744-2a8f-4764-bd64-3b588e626b2f",
        titre: "1. S’organiser",
        titre_sms: "Conseil pour les devoirs : S'organiser",
        description: "Une réalisation efficace des devoirs passe nécessairement par une bonne organisation, ce qui s’apprend à l’école… comme à la maison.",
        color: '#9BFF00',
      },
      {
        cle: "0c3c60ef-e594-4026-9d3d-4f6965afba4e",
        titre: "2. Encadrer les devoirs",
        titre_sms: "Conseil pour les devoirs : Encadrer les devoirs",
        description: "Que l’on soit enseignant ou parent, on doit trouver un juste milieu entre encadrer étroitement l’enfant et lui laisser la latitude indispensable au bon développement de son autonomie.",
        color: '#FECC11',
      },
      {
        cle: "44546fbd-8d01-4e9d-9437-ce3ab894ea1d",
        titre: "3. Créer un climat favorable aux devoirs",
        titre_sms: "Conseil pour les devoirs : Créer un climat favorable aux devoirs",
        description: "L’impact des devoirs variera selon le type de devoirs donnés aux élèves. En ce sens, des devoirs trop difficiles pourraient avoir un impact négatif chez certains élèves.",
        color: '#E91D4D',
      },
      # {
      #   cle: "1d1ca132-85db-48d7-ba1b-d7c56ca38019",
      #   titre: "13. Ces conseils vous ont été utiles ?",
      #   titre_sms: "Ces conseils vous ont été utiles ?",
      #   description: "Pour votre dernier petit tour sur le site lesdevoirs.grandducenligne.com, venez retrouver Thierry Karsenti.",
      #   color: '#132056',
      #   cadeau: true,
      # }
    ]

    before_validation { self.email = self.email.downcase if self.email.present? }
    before_save { self.groupe = :trois_jours }
    after_commit :envoyer_premier_bulletin!, on: [:create]

    class << self
      def envoyer!
        sms_service = ::TwilioService.new
        aujourdhui = Date.today
        self.find_each do |bulletin|
          bulletin.sms_engin = sms_service
          bulletin.envoyer!(aujourdhui)
        end
      end
    end

    def maj_trace!(page)
      self.trace ||= {}
      self.trace[page] = eval(self.trace[page].to_s) || []
      self.trace[page] << Time.zone.now.to_i
      self.save
    end

    def envoyer!(date = nil)
      determiner_data(date)
      faire_envoi
    end

    def envoyer_premier_bulletin!
      self.reload # Pour le UUID
      self.envoyer!
    end

    # def debut
    #   self.created_at.to_date.to_time.to_i
    # end

    # C'est quoi l'index maximum que le bulletin peut consulter : une page par jour de semaine
    def fin
      return @_fin if @_fin

      debut = self.created_at.to_date
      fin = Date.today

      index = retour = (fin - debut).to_i
      (0..index).each do |i|
        date = fin - i.day
        retour -= 1 if date.saturday? || date.sunday?
      end
      @_fin = retour
    end

    # C'est quoi l'index de la page
    def page(cle)
      DATA.index {|data| data[:cle] == cle }
    end

    # Permet d'assigner email= ou telephone=
    def contact=(contact)
      if contact.to_s.include?('@')
        self.email = contact
        self.telephone = nil
      elsif contact.present?
        self.telephone = contact
        self.email = nil
      end
    end

    def url
      # "http://3jours.grandducenligne.com/pages/index##{self.uuid}--#{self.data[:cle]}"
      "http://3jours.grandducenligne.com/#conseils/#{self.uuid}--#{self.data[:cle]}"
    end

    def tiny_url
      retour = url
      begin
        Bitly.use_api_version_3
        bitly = Bitly.new('laclasselichen', 'R_478f7334a38441abb0ef241edfd4d151')
        u = bitly.shorten(retour)
        retour = u.short_url
      rescue
      end
      retour
    end
    memoize :tiny_url

    # private
      def determiner_data(date)
        self.data = nil
        if date.present?
          self.data = DATA[self.fin] unless self.fin == 0 # La première page est envoyé uniquement lorsque date == nil
        else
          self.data = DATA.first
        end
      end

      def faire_envoi
        return if self.data.blank?

        if self.email.present?
          ::Devoirs::AbonnementMailer.nouveaute(self).deliver_now
        end

        if self.telephone.present?
          self.sms_engin ||= ::TwilioService.new

          message = self.data[:titre_sms]
          message += "\nDécouvrez pourquoi et comment : "
          message += self.tiny_url

          self.sms_engin.envoie(self.telephone, message)
        end
      end

  end
end
