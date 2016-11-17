<script>
import sceneMixin from 'vue/mixins/scene'
import Diffusion from 'models/diffusion'

import { loadDiffusion } from 'store/ressources'
import speak from 'vue/components/shared/ui/speak.vue'

module.exports = {
  name: 'DiffusionShowScene',
  mixins: [sceneMixin],
  store: {
    diffusions: 'ressources.diffusions',
    $route: 'router',
  },
  methods: {
    loadDiffusion,
  },
  created() {
    this.loadDiffusion(this.$route.params.id)
  },
  computed: {
    diffusion() {
      return this.diffusions && Diffusion.get(this.$route.params.id)
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
    speak,
  },
}
</script>

<template lang="jade">

div.diffusion-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  div.container(v-if="diffusion")
    h1.titre {{{ diffusion.titre }}}
    p.description {{{ diffusion.description }}}
    speak(:audio-srcs='sources')
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

  }

</style>
