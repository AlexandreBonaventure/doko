<script>
import sceneMixin from 'vue/mixins/scene'

import { giveAnswer } from 'store/upload'
import moment from 'moment'

import vueRecord from '../components/shared/ui/vue-record-tone.vue'
import timerBar from '../components/shared/ui/timer-bar.vue'
// import vueAnalyser from '../components/shared/ui/vue-analyser.vue'
import { MAX_RECORDING_TIME } from 'configs'
import { swiper as Swipe, swiperSlide as SwipeItem } from 'vue-awesome-swiper'

import Question from 'models/question'

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
      blob: null,
      isSavingReponse: false,
      isFinished: false,
    }
  },
  store: ['ressources', 'router'],
  components: {
    vueRecord,
    timerBar,
    Swipe,
    SwipeItem,
    // vueAnalyser,
  },
  methods: {
    giveAnswer,
    registerBlob(blob) {
      this.isRecording = false
      this.blob = blob
    },
    saveRecord(blob) {
      this.isFinished = false
      this.isSavingReponse = true
      // const nextId = (this.router.params.id % this.ressources.randomQuestions.length) + 1
      const id = this.currentQuestion.id
      const user_id = this.ressources.usager.id
      this.giveAnswer(blob, id, user_id)
        .then(() => {
          this.isSavingReponse = false
          this.blob = null
          this.setState('questions-random-record')
        })
    },
    setElapsedTime(elapsedTime) {
      this.elapsedTime = elapsedTime
    }
  },
  computed: {
    currentQuestion() {
      if (!this.ressources.questions.length || !this.router.params.id) return
      return Question.get(this.router.params.id)
      // return this.ressources.randomQuestions[this.router.params.id - 1]
    },
    backgroundColor() {
      const colors = ['#FF4A1D', '#FFE100', '#5AC5F8']
      return colors[(this.currentQuestion.position - 1) % colors.length]
    },
    formattedElapsedTime() {
      return moment(this.elapsedTime).format('mm : ss')
    },
    sliderOpts() {
      return {
        name: 'currentSwiper',
        // 所有配置均为可选（同Swiper配置）
        autoplay: false,
        direction : 'vertical',
        speed: 700,
        loop: true,
        effect: 'slide',
        parallax: true,
        // height: '40vh',
        // grabCursor : true,
        // setWrapperSize :true,
        // autoHeight: true,
        // pagination : '.swiper-pagination',
        // paginationClickable :true,
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        // scrollbar:'.swiper-scrollbar',
        // mousewheelControl : true,
        observeParents: true,
      }
    },
  },
  watch: {
    router: {
      handler({ params: { id } }) {
        if (id) this.$nextTick(() => this.$refs.swiper.swiper.slideTo(this.currentQuestion.position - 1))
      },
    },
  },
}
</script>

<template lang="jade">

div.question-scene.wrapper_scene(v-element-query, min-width="900px 1400px", :class="{'-is-finished': isFinished, '-is-recording': isRecording}")
  button.btnsave(v-if="isFinished", type="button", @click="saveRecord(blob)") Sauvegarder et passer à la question suivante

  swipe.slide.is-full-width(:options="sliderOpts", v-ref:swiper, v-if="currentQuestion")
    swipe-item.slideitem(:style=" {} || { backgroundColor: backgroundColor }")
      div.questions
        div.question
          h3.titre {{{ currentQuestion.question }}}
          p.description {{{ currentQuestion.description }}}
    swipe-item.slideitem(v-for="currentQuestion in ressources.questions", :style="{ {} || backgroundColor: backgroundColor }")
      div.questions
        div.question
          h3.titre {{{ currentQuestion.question }}}
          p.description {{{ currentQuestion.description }}}

  timer-bar.recording(v-if!="isRecording || blob", transition="slideUp", :time="elapsedTime", :max-time="maxTime")
    div.infos(v-if="isRecording")
      span.elapsedtime {{formattedElapsedTime}}
      span.recordetiquette REC
    div.infos(v-else)
      button.btn(type="button", @click="saveRecord(blob)") Sauvegarder et passer à la question suivante
      a(:href="getUrlFromState('questions-index')") Revenir aux questions
  vue-record.record(@success="registerBlob", @start="isRecording = true;isFinished = false",  @stop="isFinished = true", @recording="setElapsedTime")
  .background
    canvas(v-el:canvas)


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
        overflow-y: hidden;
    font-family: $font-primary;
    padding-bottom: 20vh;
    .btn, .btnsave {
      background-color: white;
      appearance: none;
      border:none;
      padding: 10px;
      font-family: $font-primary;
      cursor: pointer;

    }
    .btnsave {
      @include position(fixed, 50% null null 50%);
      transform: translate(-50%, -50%);
      font-size: 24px;
      padding: 20px;

      z-index: 1000;
    }
    &.-is-finished {
      &:after {
        @include position(fixed, 0 0 0 0);
        content: "";
        z-index: 9;
        background: rgba(0,0,0,.5)
      }
      .recording {
        height: 150px;
      }
    }
    &.-is-recording {

    }

    .slide {
      height: 100vh;
      overflow: hidden;
      @include position(absolute, 0 0 0 0);
    }
    .slideitem {
      // padding-top: 10%;
      // cursor: pointer;
      // &:hover {
      //   opacity: .8;
      // }
      .questions {
        width: 80%;
        margin: 0 auto;
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .questions {
      text-align: center;
      width: 80%;
      font-size: rem(40);
    }

    .record {
      width: 100%;
      @include position(absolute, 0 0 0 0);
      z-index: 5;
    }
    .description {
      font-size: rem(20);
    }
    .recordetiquette {
      // background-color: white;
      // padding: 10px;
      // @include position(absolute, null 0 0 null);
      @include position();
      // margin: 20px;
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
      color: white;
      height: 80px;
      z-index: 10;
      transition: height .3s ease-in-out;
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
    .infos {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }

</style>
<style lang="scss">
  @import "rallye/base/utils/vendors";
  @import "rallye/base/project/mixins";
  @import "rallye/base/project/variables";

  .question-scene {
    .titre {
      font-family: $font-secondary;
    }
  }

</style>
