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
  h3.intro.
    Bienvenue dans la Radio Dokoma.
    Une radio étudiante pour tous les étudiants.
  p.description.
    Vous choisissez un thème ou un question et vous y répondez en cliquant sur le micro.
    Ensuite, le fichier est envoyé automatiquement sur les serveurs de Dokoma. Des monteurs sonores feront des émissions que vous retrouverez sur ce site et dans différentes plate-formes de diffusion en ligne.
    #[br]
  button(type="button", @click="setState('questions-index')")
    icon(icon="mic")
  p.
    #[b Allez-y, exprimez-vous.]
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
      white-space: pre-line;
      text-align: center;
      width: 80%;
      font-size: rem(40);
      @include bounceIn();
    }
    .description {
      white-space: pre-line;
      text-align: center;
      width: 80%;
      font-size: rem(20);
    }
  }

</style>
