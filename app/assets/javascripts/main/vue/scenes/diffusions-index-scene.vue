<script>
import sceneMixin from 'vue/mixins/scene'

import { loadAllDiffusions } from 'store/ressources'

module.exports = {
  name: 'DiffusionScene',
  mixins: [sceneMixin],
  store: {
    diffusions: 'ressources.diffusions',
  },
  methods: {
    loadAllDiffusions,
  },
  created() {
    this.loadAllDiffusions()
  },
}
</script>

<template lang="jade">

div.diffusion-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  div.container
    h1 Diffusions
    ul
      li(v-for="diffusion in diffusions")
        a(class="is-flex-center", :href="getUrlFromState('diffusions-show', { id: diffusion.id })")
          div.is-flex-1
            h3 {{{diffusion.titre}}}
            p {{{diffusion.description}}}
          span.minutage {{diffusion.formatted_temps}}
      //- {{diffusion.url}}

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

  }

</style>
