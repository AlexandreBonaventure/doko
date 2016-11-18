import VideoJs from 'video.js'
import Wavesurfer from 'videojs-wavesurfer'

module.exports = {
  params: ['videojs-options', 'videojs-src'],
  paramWatchers: {
    videojsOptions() {
      // this._videojs.options(val)
    },
    videojsSrc(val) {
      this._videojs.src(val)
    },
  },

  bind: function() {
    this.vm.$nextTick(() => {
      this._videojs = VideoJs(this.el, this.params.videojsOptions || {})

      if (this.params.videojsSrc)
        this._videojs.src(this.params.videojsSrc)

      this._videojs
        .ready(() => {
          this.el.dispatchEvent((new CustomEvent('vjs-ready', {
            detail: {
              player: this._videojs,
            }
          })))
        })

      let events = [ 'play',
        'pause',
        'timeupdate',
        'durationchange',
        'ended',
        'error',
        'loadeddata',
        'loadedmetadata',
        'timeupdate',
        'useractive',
        'userinactive',
        'volumechange' ]

      events.forEach((event) => {
        let vjsEvent = `vjs-${event}`
        this._videojs.on(event, () => {
          this.el.dispatchEvent((new CustomEvent(vjsEvent, {
            detail: {
              player: this._videojs
            }
          })))
        })
      })

      this.vm.$on('hook:beforeDestroy', () => { // teardown
        try { // HACK causing vdata errors
          this._videojs.dispose()
        } catch (e) {

        }
      })


      // this._videojs
      //  .ready(() => {}, true)
        // .on('play', () => {})
        // .on('pause', () => {})
        // .on('timeupdate', () => {})
        // .on('durationchange', () => {})
        //
        // .on('ended', () => {})
        // .on('error', () => {})
        // .on('loadeddata', () => {})
        // .on('loadedmetadata', () => {})
        // .on('timeupdate', () => {})
        // .on('useractive', () => {})
        // .on('userinactive', () => {})
        // .on('volumechange', () => {})
    })

  },

  unbind() {
  }
}
