module Api
  class StatusController < ApiApplicationController

    def status
      render json: { status: :ok }
    end

  end
end
