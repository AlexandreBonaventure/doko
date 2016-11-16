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
        playerOptions: {
          controls: false,
          preload: true,
          autoplay: false
        },
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
      loader_svg_strokeoffset: function () {
        var val = (this.remainingTime / this.duration)*100;
        var c = Math.PI*(this.r*2);

        if (val < 0) { val = 0;}
        if (val > 100) { val = 100;}

        return this.isPlaying ? c - ((100-val)/100)*c : 0;
      },
      loader_svg_strokedasharray: function () {
        return 2*Math.PI* this.r;
      }
    },
    events: {

    },
    methods: {
      playAudio: function () {
        this.player.play();
      },
      stopAudio: function () {
        this.player.pause();
        this.player.currentTime(0);
      },
      toggleAudio: function () {
        if (this.isPlaying) {
          this.stopAudio()
          this.hasClicked = false;
        } else {
          this.playAudio();
          this.hasClicked = true;
        }
      },
      clickHandler: function () {
        if (this.hasClicked) {
          this.toggleAudio()
        } else {
          this.playAudio()
          this.hasClicked = true;
        }
      },

      ready(event){
        this.isReady = true
        this.player = event.detail.player
      },
      play(event){
        this.isPlaying = !event.detail.player.paused()
      },
      pause(event){
        this.isPlaying = !event.detail.player.paused()
      },
      durationchange(event){
          this.duration = event.detail.player.duration()
      },
      timeupdate(event){
        this.currentTime = event.detail.player.currentTime()
        this.remainingTime = event.detail.player.remainingTime()
      },
      ended(event){
        this.isPlaying = !event.detail.player.paused()
        this.hasClicked = false;
      }
    },
    directives: {
      videojs: require('vue/directives/video-js')
    }
  };
</script>

<template lang="jade">
div.speak-wrapper(
  v-show="isReady",
  :class="{'-playing':isPlaying}",
  v-on:click='clickHandler',
  v-on:mouseenter='!hasClicked ? playAudio() : null',
  v-on:mouseleave='!hasClicked ? stopAudio() : null')

  audio(v-videojs,
        :videojs-options="playerOptions",
        :videojs-src="audioSrcs",
        v-on:vjs-ready="ready",
        v-on:vjs-play="play",
        v-on:vjs-pause="pause",
        v-on:vjs-durationchange="durationchange",
        v-on:vjs-timeupdate="timeupdate",
        v-on:vjs-ended="ended",
        controls='', preload='auto', style="display: none;")
    //source(v-for="source in audioSrcs", track-by="$index", :src='source.src', :type='source.type')

  div.center
    i.icon.icon-speaker
    //- svg.circle(style='position:absolute', :width!='r*2+10', :height!='r*2+10', v-show='isPlaying', transition='fade')
      //- circle(style='transition: stroke-dashoffset .3s linear;', v-el:loadersvg='', :r='r', :cx='r+5', :cy='r+5', fill='transparent', stroke-alignment='inside', stroke='#000', :stroke-dasharray='loader_svg_strokedasharray', :stroke-dashoffset='loader_svg_strokeoffset')

</template>

<style lang="scss">
@import "rallye/base/utils/vendors";
@import "rallye/base/project/mixins";
@import "rallye/base/project/variables";
@import "animatewithsass/animate.scss";

  .speak-wrapper{
    min-width: 15px;
    min-height: 15px;
    cursor: pointer;
    border-radius: 50%;
    position: relative;

    box-shadow: 1px 2px 1em rgba(0,0,0,0.3);

    > .center {
      min-width: 100%;
      min-height: 100%;
      @include size(80%);
      @include position();
      display: flex;
      align-items: center;
      justify-content: center;
      text-align:center;
      margin: 0 auto;
    }
    > .center > .icon {
      @include size(65%);
    }
    > .center > .circle {
      @include position(absolute, 0 0 0 0);
      transform: translate(-50%, -50%);
    }

    &.-playing {
      @include pulse(
        $duration: .7s,
        $count: infinite,
        $fill: alternate
      );
    }

    &.-white {
      background-color: #fff;
    }
  }
</style>
