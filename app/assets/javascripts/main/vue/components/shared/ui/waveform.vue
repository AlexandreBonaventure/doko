<template lang="jade">

div(v-el:container)
	canvas.canvas(v-el:canvas, width="300", height="100", style="border:1px solid #d3d3d3;background:#ffffff;")

</template>

<script>
import $ from 'jquery'

export default {
  name: 'waveform',
  props: {
    buffer: {
      required: true,
    },
  },
  ready() {
    this.init()
    this.resize()
    this.draw()
  },
  methods: {
    init() {
      this._context = this.$els.canvas.getContext('2d')
    },
    resize() {
      const $canvas = $(this.$els.canvas)
      const $container = $(this.$els.container)
      const min = Math.min($container.width(), $container.height())
      $canvas.width($container.width())
      $canvas.height( $container.height())
      this._context.canvas.width = $container.width()
      this._context.canvas.height = $container.height()

      this._centerX = $container.width() / 2
      this._centerY = $container.height() / 2
    },
    draw() {
      this._requestId = requestAnimationFrame(this.draw)

      const array = this.buffer
      // const array = this.buffer.getChannelData(0)
        // console.log('buffer', array)
      const context = this._context
      context.clearRect(0, 0, this._centerX * 2, this._centerY * 2)
      context.save()

      context.strokeStyle = '#FFB729'
      context.lineCap = 'round'
      // context.beginPath()
      // context.rect(20, 20, 150, 100)
      // context.fillStyle = 'red'
      // context.fill()

      context.translate(0, this._centerY)
      // // context.rotate( this._rotation );
      // drawing
      const numSlices = 500
      const chunkSize = array.length / numSlices
      const maxHeight = this._centerY * 0.5
      let lastSample = 0
      context.lineWidth = (this._centerX / numSlices) * 7
      context.beginPath()
      //
      for (var theta = 0; theta < numSlices; theta++){
      	// var radians = (theta / numSlices) * twoPi
      	let amp = Math.abs(array[Math.floor(theta * chunkSize)])
      	amp = Math.pow(amp, 0.5)
      	amp = Math.max(lastSample * 0.2, amp)
      	lastSample = amp
      	amp *= maxHeight
      	// const startPos = MathUtils.pol2cart(radius - amp, -radians);
      	// const endPos = MathUtils.pol2cart(radius + amp, -radians);
      	context.moveTo(theta, -amp)
      	context.lineTo(theta, amp)
      }
      context.stroke();

      context.translate(0, -this._centerY )
      context.restore()


    },
    teardown() {
      cancelAnimationFrame(this._requestId)
    }
  },
  destroyed() {
    this.teardown()
  }
}
</script>

<style lang="css">
  .canvas {
    width: 100%;
    height: 100%;
  }
</style>
