module Rails
  class Application
    attr_accessor :rev_assets_manifest
  end
end

class RevAssetsManifestInitializer < ::Rails::Railtie
  config.after_initialize do |app|
    app.rev_assets_manifest = begin
      path = Rails.root.join('public/assets/rev-manifest.json')
      if File.exist?(path)
        file = File.read(path)
        JSON.parse(file)
      else
        {}
      end
    end
  end
end
