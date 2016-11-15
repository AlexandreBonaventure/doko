require 'routes/subdomain_constraint'

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get :status, to: 'status#status'

    namespace :devoirs, path: "" do
      resources :bulletins, :only => [:show, :create] do
      end
    end
  end

  root to: 'hype/gdl/rallye#dashboard', defaults: { hype_path: 'rallye/dashboard' }
end
