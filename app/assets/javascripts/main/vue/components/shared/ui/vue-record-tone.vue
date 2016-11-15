<script>

  import Tone from 'tone'
  import Recorder from 'recorderjs'

  export default {
    props: {
      options: {
        default() {
          return {
            type: 'audio',
            mimeType: 'video/webm',
            bufferSize: 0,
            sampleRate: 44100,
            leftChannel: false,
            disableLogs: false,
            // recorderType: webrtcDetectedBrowser === 'edge' ? StereoAudioRecorder : null
          }
        },
      },
    },
    data() {
      return {
        isRecording: false,
        isMicOpen: false,
      }
    },
    methods: {
      // CORE
      startRecording() {
        this.$emit('start')
        this._mic.start()
        this._audioRecorder.record()
        this.isRecording = true
        this.drawWaveform()
      },
      stopRecording() {
        this.$emit('stop')
        this._mic.stop()
        this._audioRecorder.stop()
        this._audioRecorder.exportWAV(this.doneEncoding)
        this.isRecording = false
        this.resetWaveform()
        window.cancelAnimationFrame(this._loopId)
        this._loopId = false
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
      },
      drawWaveform() {
        const canvas = this.$els.canvas
        const context = canvas.getContext('2d')

        context.canvas.width = canvas.clientWidth
        context.canvas.height = canvas.clientHeight

        const drawLoop = () => {
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
div.vue-recorder
  button(v-if="isMicOpen", type="button", @click="!isRecording ? startRecording() : stopRecording()")
    span(v-if="!isRecording") enregistrer
    span(v-else) arreter
  div.waveform
    canvas.wavecanvas(v-el:canvas)

</template>


<style lang="scss" scoped>
  .vue-recorder {
    .waveform {
      height: 100%;
      width: 100%;
    }
    .wavecanvas {
      height: 100%;
      width: 100%;
    }
  }
</style>
