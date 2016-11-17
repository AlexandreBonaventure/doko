<script>
import sceneMixin from 'vue/mixins/scene'

import { loadAllDiffusions } from 'store/ressources'
import diffusionItem from './diffusions-index-scene/diffusion-item.vue'

module.exports = {
  name: 'DiffusionScene',
  mixins: [sceneMixin],
  store: {
    diffusions: 'ressources.diffusions',
  },
  methods: {
    loadAllDiffusions,
  },
  components: {
    diffusionItem,
  },
  created() {
    this.loadAllDiffusions()
  },
}
</script>

<template lang="jade">

div.diffusion-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  div.container
    h3.titre Diffusions
    ul.list
      li(v-for="diffusion in diffusions")
        diffusion-item.item(:diffusion="diffusion")
        //- a(class="is-flex-center", :href="getUrlFromState('diffusions-show', { id: diffusion.id })")
        //-   div.is-flex-1
        //-     h3.titre {{{diffusion.titre}}}
        //-     p {{{diffusion.description}}}
        //-   span.minutage {{diffusion.formatted_temps}}
      //- {{diffusion.url}}
  div.background
    canvas(v-el:canvas)

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .diffusion-scene {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    font-family: $font-primary;
    padding-bottom: 20vh;
    .container {
      width: 80%;
    }
    padding-left: 210px;
    padding-top: 90px;
    .titre {
      font-size: rem(40);
      font-family: $font-secondary;
    }
    .list {
      padding-left: 50px;
      border-left: 4px solid #fff;
    }
    .item {
      margin-bottom: 10px;
    }
  }

</style>
