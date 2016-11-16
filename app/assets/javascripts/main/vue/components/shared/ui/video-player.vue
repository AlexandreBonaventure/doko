<script>
  let Vue = require('vue')
  let _ = require('lodash')

  module.exports = {
    name: 'Video-player',
    props: {
      sources: {
        required: true,
        type: Array
      },
      opts: {
        default() {
          return {}
        }
      }
    },
	data() {
	  return {
	  	playerOptions: {
		  width: '100%',
		  height: '100%'
		}
	  }
	},
    ready() {
	  _.assign(this.playerOptions, this.opts)
    },
	directives: {
      videojs: require('vue/directives/video-js')
    }
  }
</script>

<template lang="jade">

div.video-player
  video.videojsplayer.video-js.vjs-default-skin.vjs-big-play-centered.vjs-fluid(
	v-videojs,
	:videojs-options="playerOptions",
	:videojs-src="sources",
    controls='', preload='auto')
    // source(v-for="source in sources", track-by="$index", :src='source.src', :type='source.type')
    p.vjs-no-js
      | Votre navigateur ne supporte pas la lecture vidéo. Merci de le mettre à jour.

</template>

<style lang="scss">
  // @import "laclasse-eleve/shared/themes/_themes";
  // @import "laclasse-eleve/exercices/base/utils/_vendors";

  .video-player{
    /********
     * BASE *
     ********/

    padding-bottom: 20px;

    &:after { //HACK to get the padding technique working
      content: "a";
      margin-top: -50px;
      display: block;
      visibility: none;
    }

    //structure
    .videojsplayer {
      min-width: 100%;
      max-width: 100%;
      // min-height: 300px;

      // RESPONSIVE RULES
      // padding-top: 56.25%;
      &.vjs-fullscreen {padding-top: 0px}
    }
    /************
     * ELEMENTS *
     ************/


  }
</style>
