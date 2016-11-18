<script>
  import WaveSurfer from 'wavesurfer.js'

  export default {
    name: 'wave',
    props: {
      src: {
        required: true,
      },
    },
    ready() {
      const wavesurfer = this._wavesurfer = WaveSurfer.create({
        container: this.$els.wavecontainer,
        waveColor: 'rgba(52,52,52, .7)',
        progressColor: 'rgba(255,255,255,1)',
        barWidth: 2,
        height: 350,
      })
      wavesurfer.load(this.src)
      wavesurfer.on('ready', () => {
        wavesurfer.play()
      })
      wavesurfer.on('play', () => {

      })
    },
    destroyed() {
      this._wavesurfer.destroy()
    },
    watch: {
      src(src) {
        this._wavesurfer.load(src)
      },
    },
  }
</script>

<template lang="jade">

  div.wave-wrapper
    div(v-el:wavecontainer)
    slot

</template>

<style lang="scss">
@import "rallye/base/utils/vendors";
@import "rallye/base/project/mixins";
@import "rallye/base/project/variables";

  .wave-wrapper{

  }
</style>
