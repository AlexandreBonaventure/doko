<script>
  import WaveSurfer from 'wavesurfer.js'
  import $ from 'jquery'
  import elementResizeDetectorMaker from 'element-resize-detector'
  import { debounce } from 'lodash'

  export default {
    name: 'wave',
    props: {
      src: {
        required: true,
      },
      buffer: {
        required: true,
      },
      autoplay: {
        default: true,
      },
      autoheight: {
        default: false,
      },
      height: {
        default: 350,
      },
    },
    ready() {
      this.init()
    },
    methods: {
      init() {
        const wavesurfer = this._wavesurfer = WaveSurfer.create({
          container: this.$els.wavecontainer,
          waveColor: 'white',
          // waveColor: 'rgba(52,52,52, .7)',
          progressColor: 'rgba(255,255,255,1)',
          barWidth: 2,
          height: this.height,
        })
        if (this.src) wavesurfer.load(this.src)
        if (this.buffer) wavesurfer.loadDecodedBuffer(this.buffer)
        // if (this.autoheight) wavesurfer.drawer.setHeight($(this.$els.wavecontainer).height())
        wavesurfer.on('ready', () => {
          if (this.autoplay) wavesurfer.play()
        })
        wavesurfer.on('play', () => {

        })
        this.setupResizeSensor()
      },
      setupResizeSensor() {
        const erdUltraFast = this._erdUltraFast = elementResizeDetectorMaker({
          strategy: 'scroll',
        })
        const cb = (element) => {
          const height = element.offsetHeight
          const width = element.offsetWidth
          if (this.autoheight) this._wavesurfer.drawer.setHeight(height)
          // this._wavesurfer.drawer.setWidth(width)
        }
        const debounced = debounce(cb, 300)
        erdUltraFast.listenTo(this.$el, (element) => debounced)
      },
      destroyResizeSensor() {
         this._erdUltraFast.uninstall(this.$el)
      },
      play(buffer) {
        this._wavesurfer.play()
      },
      empty() {
        this._wavesurfer.empty()
      },
      reloadBuffer(buffer) {
        if (buffer) {
          this.buffer = buffer
          this._wavesurfer.loadDecodedBuffer(this.buffer)
        }
      },
      loadBlob(blob) {
        // this._wavesurfer.loadBlob(blob)
        // this._wavesurfer.on('ready', () => {
          this._wavesurfer.play()
        // })
      },
      reload() {
        this.buffer = null
        this._wavesurfer.destroy()
        this.destroyResizeSensor()
        this.init()
      },
      // onResize(width, height) {
      //   if (this.autoheight) this._wavesurfer.drawer.setHeight(height)
      // },
    },
    destroyed() {
      this._wavesurfer.destroy()
      this.destroyResizeSensor()
    },
    watch: {
      src(src) {
        if (this.src) this._wavesurfer.load(this.src)
      },
      // buffer(buffer) {
      //   // this._wavesurfer.empty()
      //   if (this.buffer) this._wavesurfer.loadDecodedBuffer(this.buffer)
      // },
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
