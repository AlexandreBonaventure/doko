<script>

// import Store from 'data-store'
// const Http = Store.adapters.http
import Vue from 'vue'
import Router from 'hype/router'

import { modelComputed } from 'vuex/utils'
import { mapGetters, mapActions } from 'vuex'

import SceneMixin from 'vue/mixins/scene'

module.exports = {
  name: 'FormulaireScene',
  mixins: [SceneMixin],
  props: {
    lang: {
      default: 'fr',
    },
  },
  data() {
    return {

    }
  },
  components: {
    // formulaireHowlong,
  },
  methods: {
    // ...mapActions(['updateField']), // eslint-disable-line
  },
  computed: {
    // zipcode: modelComputed('user.info.zipcode', 'updateField'),
  },
}
</script>

<template lang="jade">

div.formulaire-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  div.form
    formulaire-howlong(@submitted="setState('map')")

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .formulaire-scene {
    padding: 200px 50px 0 50px ;
    max-width: 550px;
  }

</style>
