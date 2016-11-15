<script>
import sceneMixin from 'vue/mixins/scene'

import { giveAnswer } from 'store/upload'

import vueRecord from '../components/shared/ui/vue-record-tone.vue'
// import vueAnalyser from '../components/shared/ui/vue-analyser.vue'

module.exports = {
  name: 'QuestionScene',
  mixins: [sceneMixin],
  props: {
  },
  data() {
    return {
    }
  },
  store: ['ressources', 'router'],
  components: {
    vueRecord,
    // vueAnalyser,
  },
  methods: {
    giveAnswer,
    saveRecord(blob) {
      const nextId = (this.router.params.id % this.ressources.randomQuestions.length) + 1
      const id = this.currentQuestion.id
      this.giveAnswer(blob, id, '1')
        .then(() => this.setState('question', { id: nextId }))
    },
  },
  computed: {
    currentQuestion() {
      if (!this.ressources.questions.length) return
      return this.ressources.randomQuestions[this.router.params.id - 1]
    },
    backgroundColor() {
      const colors = ['#FF4A1D', '#FFE100', '#5AC5F8']
      return colors[(this.router.params.id - 1) % colors.length]
    },
  },
}
</script>

<template lang="jade">

div.question-scene.wrapper_scene(v-element-query, min-width="900px 1400px", :style="{ backgroundColor: backgroundColor }")
  div.questions(v-if="currentQuestion")
    div.question
      h3 {{{ currentQuestion.question }}}
      p.description {{{ currentQuestion.description }}}
  vue-record.record(@success="saveRecord")


</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .question-scene {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $font-primary;
    padding-bottom: 20vh;

    .questions {
      text-align: center;
      width: 80%;
      font-size: rem(40);
    }
    .record {
      width: 100%;
      @include position(absolute, 0 0 0 0);
    }
    .description {
      font-size: rem(20);
    }
  }

</style>
