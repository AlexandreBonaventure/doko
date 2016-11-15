<script>
  import Spectrum from 'audio-spectrum'
  import Generator from 'audio-generator'

  // //visualise, depending on the environment
  //
  // //send audio-stream to the plitter
  // Generator(function (time) {
  //     return Math.sin(Math.PI * 2 * 440 * time);
  // }).pipe(plotter);

  export default {
    props: {

    },
    data() {
      return {
      }
    },
    created() {
      this.generatePlotter()
    },
    ready() {
      this.appendSpectrum()
    },
    methods: {
      appendSpectrum() {
        if (!this._plotter.canvas) return
        this.$els.plotter.appendChild(this._plotter.canvas)
        Generator((time) => Math.sin(Math.PI * 2 * 440 * time)).pipe(this._plotter)
      },
      generatePlotter() {
        this._plotter = new Spectrum({
          minFrequency: 20,
          maxFrequency: 20000,
          minDecibels: -90,
          maxDecibels: -0,
          fftSize: 1024,
          smoothingTimeConstant: 0.2,
        })
      },
    },

  }

</script>

<template lang="jade">
div.vue-analyzer
  div(v-el:plotter)
</template>


<style lang="scss" scoped>

.vue-analyzer {

}

</style>
