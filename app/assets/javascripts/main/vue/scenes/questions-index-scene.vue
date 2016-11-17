<script>
import sceneMixin from 'vue/mixins/scene'
import questionItem from './questions-index-scene/question-item.vue'

module.exports = {
  name: 'QuestionsIndexScene',
  props: {
  },
  store: {
    questions: 'ressources.questions',
  },
  mixins: [sceneMixin],
  components: {
    questionItem,
  },
  methods: {
  },
  computed: {

  },
}
</script>

<template lang="jade">

div.questions-index-scene.wrapper_scene(v-element-query, min-width="900px 1400px")
  h3.titre Questions
  ul.questionslist
    li.question(v-for="question in questions")
      question-item.questionitem(:question="question")
  div.background
    canvas(v-el:canvas)

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  @import "animatewithsass/animate.scss";

  .questions-index-scene {
    padding-left: 210px;
    padding-top: 90px;
    .titre {
      font-size: rem(40);
      font-family: $font-secondary;
    }
    .question {
      margin-bottom: 50px;
    }
    .questionslist {
      padding-left: 50px;
      border-left: 4px solid #fff;
    }
    .question-item {
      color: #000;
      &:hover {
        color: white;
      }
    }
  }

</style>
