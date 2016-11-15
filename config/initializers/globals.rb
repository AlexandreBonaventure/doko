begin
  require 'global'
rescue LoadError
end

if defined? Global
  # Improvements to read .local files
  module Global
    module Base
      def load_configuration(dir, env)
        lib_dir = dir.gsub('/config/', '/lib/config/')
        configuration = Configuration.new(load_from_directory(lib_dir, env))
        configuration.deep_merge!(load_from_file(lib_dir, env))
        configuration.deep_merge!(load_from_directory(dir, env))
        configuration.deep_merge!(load_from_file(dir, env))
        configuration.deep_merge!(load_from_file(dir+'.local', env))
        configuration
      end

      def load_from_directory(dir, env)
        config = {}

        if File.directory?(dir)
          dirs = Dir["#{dir}/*"]
          dirs.each do |entry|
            entry_base = entry.gsub(/\.local\.yml$/, '').gsub(/\.yml$/, '')
            next if (entry.end_with?('.local.yml') && (dirs.include?(entry_base) || dirs.include?("#{entry_base}.yml"))) || (entry.end_with?('.yml') && dirs.include?(entry_base))
            namespace = entry_base.gsub(/^#{dir}\/?/, '')
            config.deep_merge!(namespace => load_configuration(entry_base, env))
          end
        end

        config
      end
    end

    class Configuration

      def deep_merge(other_hash, &block)
        dup.deep_merge!(other_hash, &block)
      end

      def deep_merge!(other_hash, &block)
        other_hash.each_pair do |current_key, other_value|
          this_value = self[current_key]

          self[current_key] = if (this_value.is_a?(Hash) || this_value.is_a?(Global::Configuration)) && other_value.is_a?(Hash)
                                this_value.deep_merge(other_value, &block)
                              else
                                if block_given? && key?(current_key)
                                  block.call(current_key, this_value, other_value)
                                else
                                  other_value
                                end
                              end
        end

        self
      end
    end
  end

  Global.configure do |config|
    config.environment = Rails.env.to_s if defined?(Rails)
    config.config_directory = File.expand_path('config/global').to_s
  end
end
