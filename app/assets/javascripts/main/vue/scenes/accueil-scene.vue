<script>
import sceneMixin from 'vue/mixins/scene'
// import tooltip from 'vue/components/shared/ui/tooltip.vue'

module.exports = {
  name: 'AccueilScene',
  props: {
  },
  mixins: [sceneMixin],
  data() {
    return {
      isTooltipVisible: false,
    }
  },
  components: {
    // tooltip,
  },
  methods: {
  },
  computed: {

  },
  ready() {
    setTimeout(() => {
      this.isTooltipVisible = true
    }, 200)

  },
}
</script>

<template lang="jade">

div.accueil-scene.wrapper_scene(v-element-query, min-width="900px 1400px", :on-resize="onResize")
  h3.intro.
    Bienvenue dans la Radio Dokoma.
    Une radio étudiante pour tous les étudiants.
  p.description.
    Vous choisissez un thème ou un question et vous y répondez en cliquant sur le micro.
    Ensuite, le fichier est envoyé automatiquement sur les serveurs de Dokoma. Des monteurs sonores feront des émissions que vous retrouverez sur ce site et dans différentes plate-formes de diffusion en ligne.
    #[br]
  div.buttondiv
    //- tooltip(:visible="isTooltipVisible", :content="'Allez-y, exprimez-vous.'")
    button.btncommencer(class="_btn-sound", type="button", @click="setState('questions-random-record')")
      icon(icon="mic")
  div.background
    canvas(v-el:canvas)

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .accueil-scene {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $font-primary;
    padding-bottom: 20vh;
    .intro {
      font-family: $font-secondary;
      white-space: pre-line;
      text-align: center;
      width: 80%;
      font-size: rem(40);
      @include bounceIn();
    }
    // .btncommencer {
    //   margin: 100px 0;
    // }
    .buttondiv {
      margin: 100px 0;
    }
    .description {
      white-space: pre-line;
      text-align: center;
      width: 80%;
      font-size: rem(20);
    }
  }

</style>
