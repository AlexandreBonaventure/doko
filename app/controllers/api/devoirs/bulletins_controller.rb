module Api
  module Devoirs
    class BulletinsController < ApplicationController
      skip_before_action :verify_authenticity_token

      # before_action :set_bulletin, only: [:show, :edit, :update, :destroy]
      before_action :set_bulletin, only: [:show]

      # respond_to :html
      respond_to :json

      # def debut
      #   # @debut = Time.parse("2015-01-01").to_i
      #   # @debut = Date.today.to_time.to_i
      #   @debut = Time.parse(Devoirs::Bulletin::DEBUT).to_i
      #   respond_with(@debut)
      # end

      # def index
      #   @bulletins = Devoirs::Bulletin.all
      #   respond_with(@bulletins)
      # end

      def show
        @bulletin.maj_trace!(@page) unless @bulletin.new_record?
        respond_with(@bulletin)
      end

      # def new
      #   @bulletin = Devoirs::Bulletin.new
      #   respond_with(@bulletin)
      # end

      # def edit
      # end

      def create
        @bulletin = ::Devoirs::Bulletin.new(bulletin_params)
        @bulletin.save
        respond_with(@bulletin, location: api_devoirs_bulletins_url(@bulletin) )
      end

      # def update
      #   @bulletin.update(bulletin_params)
      #   respond_with(@bulletin)
      # end

      # def destroy
      #   @bulletin.destroy
      #   respond_with(@bulletin)
      # end

      private
        def set_bulletin
          data = params[:id]
          if data == '999'
            @bulletin = Devoirs::Bulletin.new
            @bulletin.instance_variable_set(:@_fin, Devoirs::Bulletin::DATA.size - 1)
            @page_index = 0
          elsif data == 'cadeau'
            @bulletin = Devoirs::Bulletin.new
            @page_index = Devoirs::Bulletin::DATA.size - 1
            @bulletin.instance_variable_set(:@_fin, @page_index)
            @visite = 1
          else
            @uuid, @page = params[:id].split('--')
            @bulletin = ::Devoirs::Bulletin.find_by!(uuid: @uuid)
          end
        end

        def bulletin_params
          # params.require(:bulletin).permit(:email, :nom, :prenom)
          params.require(:bulletin).permit(:contact, :nom, :prenom)
        end

    end # class BulletinsController < ApplicationController
  end # module Api
end # module Devoirs
