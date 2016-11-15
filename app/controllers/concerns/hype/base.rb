module Hype
  module Base
    extend ActiveSupport::Concern

    included do
      layout 'hype/page'

      protect_from_forgery only: []

      helper_method :hype_config
      helper_method :hype_page
      helper_method :hype_script_name
      helper_method :hype_path
    end

    protected

    def hype_config_defaults
      @hype_config_defaults = {
        async: false,
        typography: false,
        icons: false,
        vendor: 'vendor',
        partial: false,
        style: params[:hype_path],
        script: params[:hype_path],
        cdn: []
      }
    end

    def set_hype_config(**config)
      @hype_config = hype_config_defaults.merge(config)
    end

    def hype_config
      @hype_config ||= hype_config_defaults
    end

    def hype_render(**options)
      respond_to do |format|
        format.html { render hype_config[:partial] ? options : {text: nil, layout: true}.merge(options) }
      end
    end

    def hype_page
      @hype_page ||= hype_path.split('/').last
    end

    def hype_script_name
      @hype_script_name ||= hype_page.gsub('_','').gsub('-','')
    end

    def hype_path
      @hype_path ||= params[:hype_path]
    end

    def hype_action(action)
      format = params[:format] || 'html'
      path = Rails.root.join('public', action, "#{params[:hype_path]}.#{format}")
      if File.exist?(path)
        if format == 'html'
          hype_html(path)
        else
          hype_asset(path)
        end
      else
        raise ActionController::RoutingError, "No route matches [#{env['REQUEST_METHOD']}] #{env['PATH_INFO'].inspect}"
      end
    end

    def parse_hype(file, static = false)
      data = File.read(file)
      if static
        resources_path = "#{File.basename(file, File.extname(file))}.hyperesources"
        # data = data.gsub(resources_path, "/static/#{resources_path}")
        data = data
      end
      if data.match(/<!-- copy these lines to your document head: -->(.*)<!-- end copy -->(.*)<\/head/m)
        doc = Nokogiri::HTML(data)
        {
          title: doc.at('title').inner_html,
          head_content: data.match(/<!-- copy these lines to your document head: -->(.*)<!-- end copy -->(.*)<\/head/m).captures[0],
          document_content: data.match(/<!-- copy these lines to your document: -->(.*)<!-- end copy -->/m).captures[0],
        }
      else
        false
      end
    end

    def hype_html(path)
      @data = parse_hype(path)
      if @data
        render 'hype/static', layout: 'hype/static'
      else
        send_file(path, disposition: 'inline')
      end
    end

    def hype_asset(path, static = false)
      if params[:format].to_s == 'js'
        m_time = File.mtime(path)
        n_path = path.to_s.gsub('.js',"-#{m_time.to_i}.js")
        if !File.exist?(n_path)
          data = File.read(path)

          if static
            resources_path = File.dirname(path).split('/').last
            data = data.gsub(resources_path, "/#{static}/#{resources_path}")
          end

          File.open(n_path, "w") { |file| file.puts data }
          # To clean in server old files find -regex ".*hype_generated_script-.*\.js" -exec rm -rf {} \;
        end
        send_file(n_path, disposition: 'inline')
      else
        send_file(path, disposition: 'inline')
      end
    end

    module ClassMethods
    end
  end
end
