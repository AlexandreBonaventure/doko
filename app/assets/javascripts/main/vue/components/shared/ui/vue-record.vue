<script>
// const commonConfig = {
//   onMediaCaptured: function(stream) {
//     button.stream = stream;
//     if(button.mediaCapturedCallback) {
//       button.mediaCapturedCallback()
//     }
//
//     button.innerHTML = 'Stop Recording'
//     button.disabled = false
//   },
//   onMediaStopped: function() {
//     button.innerHTML = 'Start Recording';
//
//     if(!button.disableStateWaiting) {
//         button.disabled = false
//     }
//   },
//   onMediaCapturingFailed: function(error) {
//     if(error.name === 'PermissionDeniedError' && !!navigator.mozGetUserMedia) {
//         intallFirefoxScreenCapturingExtension()
//     }
//     commonConfig.onMediaStopped()
//   }
// }

  // const options = {
  //   type: 'audio',
  //   mimeType: 'video/webm',
  //   bufferSize: typeof params.bufferSize == 'undefined' ? 0 : parseInt(params.bufferSize),
  //   sampleRate: typeof params.sampleRate == 'undefined' ? 44100 : parseInt(params.sampleRate),
  //   leftChannel: params.leftChannel || false,
  //   disableLogs: params.disableLogs || false,
  //   recorderType: webrtcDetectedBrowser === 'edge' ? StereoAudioRecorder : null
  // }

  import RecordRTC from 'recordrtc'

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
      }
    },
    methods: {
      record() {
        var recordRTC = RecordRTC(mediaStream);
        recordRTC.startRecording();
        recordRTC.stopRecording(function(audioURL) {
            audio.src = audioURL;

            var recordedBlob = recordRTC.getBlob();
            recordRTC.getDataURL(function(dataURL) { });
        })
      },
      captureUserMedia(mediaConstraints, successCallback, errorCallback) {
        var isBlackBerry = !!(/BB10|BlackBerry/i.test(navigator.userAgent || ''));
        if(isBlackBerry && !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia)) {
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia(mediaConstraints, successCallback, errorCallback);
            return
        }
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback)
      },
      _addStreamStopListener(stream, callback) {
        var streamEndedEvent = 'ended'

        if ('oninactive' in stream) {
          streamEndedEvent = 'inactive'
        }

        this._stream.addEventListener(streamEndedEvent, function() {
          callback()
          callback = function() {}
        }, false)

        this._stream.getAudioTracks().forEach(function(track) {
          track.addEventListener(streamEndedEvent, function() {
            callback()
            callback = function() {}
          }, false)
        })
      },
      // CORE
      startRecording() {
        this.captureUserMedia(
          { audio: true },
          (audioStream) => {
            this.$emit('start')
            this.isRecording = true
            // recordingPlayer.srcObject = audioStream;
            // recordingPlayer.play();
            //
            // config.onMediaCaptured(audioStream);
            this._stream = audioStream
            this._recordRTC = RecordRTC(audioStream, this.options)
            this._recordRTC.startRecording()

            this._addStreamStopListener(audioStream, () => {
              this.isRecording = false
              // config.onMediaStopped();
            })
          },
          (error) => {
            this.$emit('error')
            this.isRecording = false
            // config.onMediaCapturingFailed(error);
          })
      },
      stopRecording() {
        if (!this._recordRTC) return
        this._recordRTC.stopRecording((url) => {
          this._stream.stop()
          this.$emit('success', this._recordRTC.getBlob())
          this._recordRTC = null
          this.playbackAudio(url)
        })
      },

      playbackAudio(url) {
        var audio = new Audio()
        audio.src = url
        audio.controls = true

        audio.play()

        audio.onended = function() {
          audio.pause()
          // audio.src = URL.createObjectURL(button.recordRTC.blob);
        };
      }
    },
    beforeDestroy() {
      this.stopRecording()
    }
  }

</script>

<template lang="jade">
div
  button(v-if="!isRecording", type="button", @click="startRecording") start
  button(v-else, type="button", @click="stopRecording") stop
</template>


<style lang="sass" scoped>

</style>
