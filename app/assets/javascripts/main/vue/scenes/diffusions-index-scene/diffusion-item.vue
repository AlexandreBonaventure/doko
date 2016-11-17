<script>
import routerMixin from 'vue/mixins/router'
// import tooltip from 'vue/components/shared/ui/tooltip.vue'

module.exports = {
  name: 'diffusionItem',
  mixins: [routerMixin],
  props: {
    diffusion: {
      required: true,
    },
  },
}
</script>

<template lang="jade">

a.diffusion-item(class="is-flex-center", :href="getUrlFromState('diffusions-show', { id: diffusion.id })")
  div.iconwrap
    icon(icon="play", size="100", unit="%")
  div.is-flex-1
    h3.titre {{{diffusion.titre}}}
    p.description {{{diffusion.description}}}
  span.minutage {{diffusion.formatted_temps}}

</template>

<style lang="scss" scoped>@import "rallye/base/utils/vendors";
@import "rallye/base/project/mixins";
@import "rallye/base/project/variables";
// @import "animatewithsass/animate.scss";

.diffusion-item {

  .titre {
    font-family: $font-secondary;
    font-size: 1.8em;
    margin-bottom: 0.2em;
  }
  .description {
    margin-bottom: 0;
  }
  .iconwrap {
    width: 50px;
    margin-right: 20px;
  }
}
</style>
