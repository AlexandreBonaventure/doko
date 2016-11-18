<script>
import sceneMixin from 'vue/mixins/scene'
// import tooltip from 'vue/components/shared/ui/tooltip.vue'
import Vue from 'vue'
import waveform from 'vue/components/shared/ui/waveform.vue'
import wave from 'vue/components/shared/ui/wave.vue'


module.exports = {
  name: 'AccueilScene',
  props: {
  },
  mixins: [sceneMixin],
  data() {
    return {
      isTooltipVisible: false,
      buffer: null,
    }
  },
  components: {
    waveform,
    wave,
  },
  methods: {
  },
  computed: {

  },
  ready() {
    const channels = 2
    const audioCtx = new AudioContext()
    // Create an empty two second stereo buffer at the
    // sample rate of the AudioContext
    const frameCount = audioCtx.sampleRate * 2.0
    const myArrayBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)
    setInterval(() => {
      // Fill the buffer with white noise;
      // just random values between -1.0 and 1.0
      for (var channel = 0; channel < channels; channel++) {
        // This gives us the actual array that contains the data
        var nowBuffering = myArrayBuffer.getChannelData(channel)
        for (var i = 0; i < frameCount; i++) {
          // Math.random() is in [0; 1.0]
          // audio needs to be in [-1.0; 1.0]
          nowBuffering[i] = Math.random() * 2 - 1
        }
      }
      // Vue.set(this, 'buffer', myArrayBuffer)
      this.$refs.buffer.reloadBuffer(myArrayBuffer)
      console.log('allo', myArrayBuffer)
    }, 100)

  },
}
</script>

<template lang="jade">

div.accueil-scene.wrapper_scene(v-element-query, min-width="900px 1400px", :on-resize="onResize")
  //- waveform(:buffer="buffer", v-if="buffer")
  wave.waveform(v-ref:buffer, :autoplay="false")

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
    padding-top: 20vh;
    .waveform {
      @include position(absolute, null 0 0 0);
      position: absolute!important;
      transform: translateY(50%);
      height: 10vh;
    }
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
