<script>
  var $ = require('jquery');

  module.exports = {
    name: 'Speak_widget',
    props: {
      'audioSrcs': {
        required: true,
        type: Array
      }
    },
    data: function () {
      return {
        player: null,
        isReady: false,
        currentTime: null,
        r: 15,
        isPlaying: false,
        duration: null,
        currentTime: null,
        remainingTime: null,
        hasClicked: false
      }
    },
    computed: {
      playerOptions() {
        return {
          controls: true,
          autoplay: true,
          loop: false,
          plugins: {
            wavesurfer: {
              src: this.audioSrcs[0].src,
              msDisplayMax: 10,
              debug: true,
              waveColor: 'white',
              progressColor: 'grey',
              cursorColor: 'black',
              hideScrollbar: true,
            },
          },
        }
      },
    },
    events: {

    },
    methods: {
      // playAudio: function () {
      //   this.player.play();
      // },
      // stopAudio: function () {
      //   this.player.pause();
      //   this.player.currentTime(0);
      // },
      // toggleAudio: function () {
      //   if (this.isPlaying) {
      //     this.stopAudio()
      //     this.hasClicked = false;
      //   } else {
      //     this.playAudio();
      //     this.hasClicked = true;
      //   }
      // },
      // clickHandler: function () {
      //   if (this.hasClicked) {
      //     this.toggleAudio()
      //   } else {
      //     this.playAudio()
      //     this.hasClicked = true;
      //   }
      // },
      //
      // ready(event){
      //   this.isReady = true
      //   this.player = event.detail.player
      // },
      // play(event){
      //   this.isPlaying = !event.detail.player.paused()
      // },
      // pause(event){
      //   this.isPlaying = !event.detail.player.paused()
      // },
      // durationchange(event){
      //     this.duration = event.detail.player.duration()
      // },
      // timeupdate(event){
      //   this.currentTime = event.detail.player.currentTime()
      //   this.remainingTime = event.detail.player.remainingTime()
      // },
      // ended(event){
      //   this.isPlaying = !event.detail.player.paused()
      //   this.hasClicked = false;
      // }
    },
    directives: {
      videojs: require('vue/directives/video-js-wave')
    }
  };
</script>

<template lang="jade">
div.speak-wrapper(

  :class="{'-playing':isPlaying}",
  v-on:click='clickHandler',
)

  audio(v-videojs,
  class="video-js vjs-default-skin",
        :videojs-options="playerOptions",
        v-on:vjs-ready="ready",
        v-on:vjs-play="play",
        v-on:vjs-pause="pause",
        v-on:vjs-durationchange="durationchange",
        v-on:vjs-timeupdate="timeupdate",
        v-on:vjs-ended="ended",
        controls='', preload='auto')
    //source(v-for="source in audioSrcs", track-by="$index", :src='source.src', :type='source.type')

  slot
    //- svg.circle(style='position:absolute', :width!='r*2+10', :height!='r*2+10', v-show='isPlaying', transition='fade')
      //- circle(style='transition: stroke-dashoffset .3s linear;', v-el:loadersvg='', :r='r', :cx='r+5', :cy='r+5', fill='transparent', stroke-alignment='inside', stroke='#000', :stroke-dasharray='loader_svg_strokedasharray', :stroke-dashoffset='loader_svg_strokeoffset')

</template>

<style lang="scss">
@import "rallye/base/utils/vendors";
@import "rallye/base/project/mixins";
@import "rallye/base/project/variables";
@import "animatewithsass/animate.scss";

  .speak-wrapper{

  }
</style>
