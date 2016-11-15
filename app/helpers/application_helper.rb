require 'json'

module ApplicationHelper

  def compute_asset_path(source, options = {})
    manifest_source = !Rails.env.development? && Rails.application.rev_assets_manifest[source]
    manifest_source ||= source
    File.join("/assets".freeze, manifest_source)
  end

end
