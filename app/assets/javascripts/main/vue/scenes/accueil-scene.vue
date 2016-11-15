<script>
import sceneMixin from 'vue/mixins/scene'

module.exports = {
  name: 'AccueilScene',
  props: {
  },
  mixins: [sceneMixin],
  data() {
    return {
    }
  },
  components: {

  },
  methods: {
  },
  computed: {

  },
}
</script>

<template lang="jade">

div.accueil-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  | radio

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .accueil-scene {
  }

</style>
