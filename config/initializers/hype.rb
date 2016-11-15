require 'assets/hype_digest_manifest'

Dir.glob('public/**/*hype_generated_script.js').each do |file|
  digest = Digest::MD5.file(file).hexdigest
  Assets::HypeDigestManifest.set(file[6..-1], digest)
end unless Rails.env.development?
