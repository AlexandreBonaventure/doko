<script>
import sceneMixin from 'vue/mixins/scene'
import Diffusion from 'models/diffusion'

import { loadDiffusion, loadAllDiffusions } from 'store/ressources'
import wave from 'vue/components/shared/ui/wave.vue'
// import isInBetween from 'helpers/isInBetween.js'
import { size, includes, times } from 'lodash4'

module.exports = {
  name: 'DiffusionShowScene',
  mixins: [sceneMixin],
  store: {
    diffusions: 'ressources.diffusions',
    $route: 'router',
  },
  methods: {
    loadDiffusion,
    loadAllDiffusions,
  },
  created() {
    // this.loadDiffusion(this.$route.params.id)
    this.loadAllDiffusions()
  },
  computed: {
    diffusion() {
      return this.diffusions[this.$route.params.id]
    },
    nextDiffusions() {
      if (!this.diffusion) return
      const nextPositions = times(3, () => (this.diffusion.position % size(this.diffusions)) + 1)
      return Object.values(this.diffusions).filter(({ position }) => includes(nextPositions, position))
    },
    sources() {
      const PRODUCTION_HOST = process.env.PRODUCTION_HOST
      return [{
        type: 'audio/mp3',
        src: `${PRODUCTION_HOST}${this.diffusion.url}`,
      }]
    },
  },
  components: {
    wave,
  },
}
</script>

<template lang="jade">

div.diffusion-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  div.container(v-if="diffusion")
    div.infos
      h1.titre {{{ diffusion.titre }}}
      p.description {{{ diffusion.description }}}
    div.next
      ul
        li(v-for="diffusion in nextDiffusions")
          a(:href="getUrlFromState('diffusions-show', { id: diffusion.id })")
            h5.titre
              icon.icon(icon="play")
              span {{ diffusion.titre }}
    div.waveclipper
      wave.waveform(:src='sources[0].src')
  div.background
    canvas(v-el:canvas)

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .diffusion-scene {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $font-primary;
    padding-bottom: 20vh;
    .container {
      width: 80%;
    }
    .titre {
      font-family: $font-secondary;
    }
    .infos {
      margin-bottom: 40px;
      border-left: 3px solid white;
      padding-left: 10px;
    }
    .next {
      padding-left: 80px;
      font-size: 16px;
    }
    .icon {
      margin-right: 20px;
    }
    .waveform {
      @include position(absolute, null 0 0 0);
      transform: translateY(50%);
    }
    .waveclipper {
      @include position(absolute, null 0 0 0);
      overflow: hidden;
      height: 30vh;
    }

  }

</style>
