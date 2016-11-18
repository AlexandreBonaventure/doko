<script>

  import Tone from 'tone'
  import Recorder from 'recorderjs'
  import moment from 'moment'
  import { MAX_RECORDING_TIME } from 'configs'
  import Wavesurfer from 'wavesurfer.js'
  import Streamer from 'plugins/streamer'

  export default {
    props: {
      options: {
        default() {
          return {
            maxRecordTime: MAX_RECORDING_TIME,
          }
        },
      },
    },
    data() {
      return {
        isRecording: false,
        isMicOpen: false,
        startTime: null,
        nowTime: null,
      }
    },
    computed: {
      elapsedTime() {
        return moment(this.nowTime).diff(this.startTime)
      },
    },
    methods: {
      // CORE
      startRecording() {
        this.$emit('start')
        this._mic.start()

        this._audioRecorder.record()

        //test
        const audioContext = new AudioContext()
        this._intervalId = setInterval(() => {
          this._audioRecorder.getBuffer((buffers) => {
            this.$emit('gotbuffer', buffers)
          })
        }, 500)

        this.isRecording = true
        this.drawWaveform()
        this._timeout = setTimeout(this.stopRecording, this.options.maxRecordTime * 1000)
        this.startTime = new Date()
      },
      stopRecording() {
        this.$emit('stop')
        this._mic.stop()
        this._audioRecorder.stop()
        if (this._intervalId) clearInterval(this._intervalId)
        // this._audioRecorder.getBuffer((buffers) => {
        //   this.$emit('gotbuffer', buffers)
        // })
        this._audioRecorder.exportWAV(this.doneEncoding)
        this.isRecording = false
        this.resetWaveform()
        window.cancelAnimationFrame(this._loopId)
        this._loopId = false
        if(this._timeout) {
          clearTimeout(this._timeout)
          this._timeout = null
        }
      },
      init() {
        this._mic = new Tone.Microphone()
        this._analyser = new Tone.Analyser({
          type: 'waveform',
          size: 256,
        })
        this._mic.connect(this._analyser)
        this._audioRecorder = new Recorder(this._mic)
        this.setupBinding()
      },
      setupBinding() {
        this._mic.open(() => {
          this.isMicOpen = true
        })
      },
      doneEncoding(blob) {
        this.$emit('success', blob)
        this._audioRecorder.clear()
      },
      drawWaveform() {
        const canvas = this.$els.canvas
        const context = canvas.getContext('2d')

        context.canvas.width = canvas.clientWidth
        context.canvas.height = canvas.clientHeight

        const drawLoop = () => {
          this.nowTime = new Date()
          this.$emit('recording', this.elapsedTime)
          const canvasWidth = context.canvas.width
          const canvasHeight = context.canvas.height
          this._loopId = requestAnimationFrame(drawLoop)
          context.clearRect(0, 0, canvasWidth, canvasHeight)
          const values = this._analyser.analyse()
          context.beginPath()
          context.lineJoin = 'round'
          context.lineWidth = 6
          context.strokeStyle = 'white'
          context.moveTo(0, (values[0] / 255) * canvasHeight)
          for (var i = 1, len = values.length; i < len; i++) {
            const val = values[i] / 255
            const x = canvasWidth * (i / (len - 1))
            const y = val * canvasHeight
            context.lineTo(x, y)
          }
          context.stroke()
        }
        drawLoop()
      },
      resetWaveform() {
        const canvas = this.$els.canvas
        const context = canvas.getContext('2d')

        context.canvas.width = canvas.clientWidth
        context.canvas.height = canvas.clientHeight

        const canvasWidth = context.canvas.width
        const canvasHeight = context.canvas.height
        context.clearRect(0, 0, canvasWidth, canvasHeight)
        context.beginPath()
        context.lineJoin = 'round'
        context.lineWidth = 6
        context.strokeStyle = 'white'
        context.moveTo(0, 0.5 * canvasHeight)
        context.lineTo(canvasWidth, 0.5 * canvasHeight)
        context.stroke()
      },
    },
    beforeDestroy() {
      if (this._mic) {
        this.stopRecording()
        this._audioRecorder.clear()
        this._mic.dispose()
        this._analyser.dispose()
        this._audioRecorder.clear()
      }
    },
    created() {
      this.init()
    },
  }

</script>

<template lang="jade">
div.vue-recorder(:class="{'-is-recording': isRecording}")
  button.btnrecord(class="_btn-sound", v-if="isMicOpen", type="button", @click="!isRecording ? startRecording() : stopRecording()")
    icon(icon="mic", :color="isRecording ? 'white' : 'black'")

    //- span(v-if="!isRecording") enregistrer
    //- span(v-else) arreter

  //- div.wavesurf
  //-   canvas.wavecanvas(v-el:wavesurfer)
  div.waveform
    canvas.wavecanvas(v-el:canvas)

</template>


<style lang="scss" scoped>
  @import "rallye/base/utils/vendors";

  .vue-recorder {
    &.-is-recording {
      .btnrecord {
        background: red;
        border: 4px solid white;
      }
    }
    .waveform {
      height: 100%;
      width: 100%;
    }
    .btnrecord {
      @include position(absolute, 50% null null 50%);
      transform: translate(-50%, -50%);
    }
    .wavecanvas {
      height: 100%;
      width: 100%;
    }
  }
</style>
