<script>
import routerMixin from 'vue/mixins/router'
// import tooltip from 'vue/components/shared/ui/tooltip.vue'

module.exports = {
  name: 'QuestionItem',
  mixins: [routerMixin],
  props: {
    question: {
      required: true,
    }
  },
}
</script>

<template lang="jade">

a.question-item(:href="getUrlFromState('question-record', { id: question.id })")
  h3.titre
    icon.icon(icon="mic")
    span {{{question.question}}}
  //- p {{{question.description}}}

</template>

<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";
  // @import "animatewithsass/animate.scss";

  .question-item {
    .titre {
      font-family: $font-secondary;
      font-size: 1.8em;
      &:hover {
        .icon {
          opacity: 1;
        }
      }
    }
    .icon {
      margin-right: 20px;
      opacity: .5
    }
  }

</style>
<style lang="scss">
  .question-item {
    .titre {
      p {display: inline-block;}
    }
  }
</style>
