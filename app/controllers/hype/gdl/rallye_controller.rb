module Hype
  module Gdl
    class RallyeController < HypeController

      def dashboard
        set_hype_config async: true,
                        style: 'rallye',
                        script: 'rallye',
                        typography: '72528/6401352',
                        iconsloader: {
                          icons: ['icons/rallye/rallye-icons.svg.data']
                        }
        hype_render
      end

    end
  end
end
