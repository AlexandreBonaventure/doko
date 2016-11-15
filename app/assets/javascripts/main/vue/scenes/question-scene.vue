<script>
import sceneMixin from 'vue/mixins/scene'

import { giveAnswer } from 'store/upload'
import moment from 'moment'

import vueRecord from '../components/shared/ui/vue-record-tone.vue'
import timerBar from '../components/shared/ui/timer-bar.vue'
// import vueAnalyser from '../components/shared/ui/vue-analyser.vue'
import { MAX_RECORDING_TIME } from 'configs'

module.exports = {
  name: 'QuestionScene',
  mixins: [sceneMixin],
  props: {
  },
  data() {
    return {
      isRecording: false,
      elapsedTime: null,
      maxTime: MAX_RECORDING_TIME * 1000,
    }
  },
  store: ['ressources', 'router'],
  components: {
    vueRecord,
    timerBar,
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
    setElapsedTime(elapsedTime) {
      this.elapsedTime = elapsedTime
    }
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
    formattedElapsedTime() {
      return moment(this.elapsedTime).format('mm : ss')
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
  timer-bar.recording(v-if="isRecording", transition="slideUp", :time="elapsedTime", :max-time="maxTime")
    span.elapsedtime {{formattedElapsedTime}}
    span.recordetiquette REC
  vue-record.record(@success="saveRecord", @start="isRecording = true",  @stop="isRecording = false" @recording="setElapsedTime")


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
    .recordetiquette {
      // background-color: white;
      // padding: 10px;
      @include position(absolute, null 0 0 null);
      margin: 20px;
      text-indent: 40px;
      &:after {
        position: absolute;
        top: 50%;
        left: 20px;
        content: "";
        @include size(20px);
        transform: translate(-50%,-50%);
        border-radius: 100%;
        background: red;
        animation: blink-animation 1s steps(5, start) infinite;
      }
    }
    .recording {
      background-color: rgb(54,54,54);
      padding: 10px;
      height: 80px;
      line-height: 80px;
      @include position(absolute, null 0 0 0);
      // &:after {
      //   position: absolute;
      //   top: 50%;
      //   left: 20px;
      //   content: "";
      //   @include size(20px);
      //   transform: translate(-50%,-50%);
      //   border-radius: 100%;
      //   background: red;
      //
      // }
    }
    .elapsedtime {
      color: white;
    }
  }

</style>
