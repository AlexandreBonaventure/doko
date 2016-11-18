/*! wavesurfer.js 1.0.57 (Thu, 25 Feb 2016 17:09:20 GMT)
 * https://github.com/katspaugh/wavesurfer.js
 * @license CC-BY-3.0 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["wavesurfer"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("wavesurfer.js")) : b(WaveSurfer)
}(this, function(a) {
    "use strict";
    a.Streamer = {
        init: function(a) {
            this.params = a;
            this.wavesurfer = a.wavesurfer;
            if (!this.wavesurfer) throw new Error("No WaveSurfer instance provided");
            this.active = !1, this.paused = !1, this.reloadBufferFunction = this.reloadBuffer.bind(this);
            this.bufferSize = this.params.bufferSize || 4096, this.numberOfInputChannels = this.params.numberOfInputChannels || 1, this.numberOfOutputChannels = this.params.numberOfOutputChannels || 1, this.micContext = this.wavesurfer.backend.getAudioContext();
        },
        start: function(stream) {
            this.gotStream(stream);
        },
        togglePlay: function() {
            this.active ? (this.paused = !this.paused, this.paused ? this.pause() : this.play()) : this.start()
        },
        play: function() {
            this.paused = !1, this.connect()
        },
        pause: function() {
            this.paused = !0, this.disconnect()
        },
        stop: function() {
            this.active && (this.stopDevice(), this.wavesurfer.empty())
        },
        stopDevice: function() {},
        connect: function() {
            void 0 !== this.stream && (this.mediaStreamSource = this.micContext.createMediaStreamSource(this.stream), this.levelChecker = this.micContext.createScriptProcessor(this.bufferSize, this.numberOfInputChannels, this.numberOfOutputChannels), this.mediaStreamSource.connect(this.levelChecker), this.levelChecker.connect(this.micContext.destination), this.levelChecker.onaudioprocess = this.reloadBufferFunction)
        },
        disconnect: function() {
            void 0 !== this.mediaStreamSource && this.mediaStreamSource.disconnect(), void 0 !== this.levelChecker && (this.levelChecker.disconnect(), this.levelChecker.onaudioprocess = void 0)
        },
        reloadBuffer: function(a) {
            this.paused || (this.wavesurfer.empty(), this.wavesurfer.loadDecodedBuffer(a.inputBuffer))
        },
        gotStream: function(a) {
            this.stream = a, this.active = !0, this.play()
        },
        destroy: function(a) {
            this.paused = !0, this.stop()
        },
        deviceError: function(a) {},
        extractVersion: function(a, b, c) {
            var d = a.match(b);
            return d && d.length >= c && parseInt(d[c], 10)
        },
        detectBrowser: function() {
            var a = {};
            return a.browser = null, a.version = null, a.minVersion = null, "undefined" != typeof window && window.navigator ? navigator.mozGetUserMedia ? (a.browser = "firefox", a.version = this.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), a.minVersion = 31, a) : navigator.webkitGetUserMedia && window.webkitRTCPeerConnection ? (a.browser = "chrome", a.version = this.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), a.minVersion = 38, a) : navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (a.browser = "edge", a.version = this.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), a.minVersion = 10547, a) : (a.browser = "Not a supported browser.", a) : (a.browser = "Not a supported browser.", a)
        }
    }, a.util.extend(a.Streamer, a.Observer)
}), ! function(a, b) {
    "function" == typeof define && define.amd ? define(["wavesurfer"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("wavesurfer.js")) : b(WaveSurfer)
}(this, function(a) {
    "use strict";
    a.Streamer = {
        init: function(a) {
            if (this.params = a, this.wavesurfer = a.wavesurfer, !this.wavesurfer) throw new Error("No WaveSurfer instance provided");
            this.active = !1, this.paused = !1, this.reloadBufferFunction = this.reloadBuffer.bind(this);
            this.bufferSize = this.params.bufferSize || 4096, this.numberOfInputChannels = this.params.numberOfInputChannels || 1, this.numberOfOutputChannels = this.params.numberOfOutputChannels || 1, this.micContext = this.wavesurfer.backend.getAudioContext();
        },
        start: function(stream) {
            this.gotStream(stream);
        },
        togglePlay: function() {
            this.active ? (this.paused = !this.paused, this.paused ? this.pause() : this.play()) : this.start()
        },
        play: function() {
            this.paused = !1, this.connect()
        },
        pause: function() {
            this.paused = !0, this.disconnect()
        },
        stop: function() {
            this.active && (this.stopDevice(), this.wavesurfer.empty())
        },
        stopDevice: function() {},
        connect: function() {
            void 0 !== this.stream && (this.mediaStreamSource = this.micContext.createMediaStreamSource(this.stream), this.levelChecker = this.micContext.createScriptProcessor(this.bufferSize, this.numberOfInputChannels, this.numberOfOutputChannels), this.mediaStreamSource.connect(this.levelChecker), this.levelChecker.connect(this.micContext.destination), this.levelChecker.onaudioprocess = this.reloadBufferFunction)
        },
        disconnect: function() {
            void 0 !== this.mediaStreamSource && this.mediaStreamSource.disconnect(), void 0 !== this.levelChecker && (this.levelChecker.disconnect(), this.levelChecker.onaudioprocess = void 0)
        },
        reloadBuffer: function(a) {
            this.paused || (this.wavesurfer.empty(), this.wavesurfer.loadDecodedBuffer(a.inputBuffer))
        },
        gotStream: function(a) {
            this.stream = a, this.active = !0, this.play()
        },
        destroy: function(a) {
            this.paused = !0, this.stop()
        },
        deviceError: function(a) {},
        extractVersion: function(a, b, c) {
            var d = a.match(b);
            return d && d.length >= c && parseInt(d[c], 10)
        },
        detectBrowser: function() {
            var a = {};
            return a.browser = null, a.version = null, a.minVersion = null, "undefined" != typeof window && window.navigator ? navigator.mozGetUserMedia ? (a.browser = "firefox", a.version = this.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), a.minVersion = 31, a) : navigator.webkitGetUserMedia && window.webkitRTCPeerConnection ? (a.browser = "chrome", a.version = this.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), a.minVersion = 38, a) : navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (a.browser = "edge", a.version = this.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), a.minVersion = 10547, a) : (a.browser = "Not a supported browser.", a) : (a.browser = "Not a supported browser.", a)
        }
    }, a.util.extend(a.Streamer, a.Observer)
});
