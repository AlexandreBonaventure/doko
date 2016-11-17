
import Trianglify from 'trianglify'
import Eventbus from 'services/eventbus'
import $ from 'jquery'

const colors = ['RdPu', 'YlGnBu', 'BuPu', 'PuRd', 'PuBuGn']
let currentColorIndex = 0

export default {
  ready() {
    const $fond = $(this.$el).find('.background')
    const pattern = Trianglify({ width: $fond.width(), height: $fond.height(), x_colors: 'PuBu' })
    pattern.canvas(this.$els.canvas)
    // $fond.append(pattern.canvas)
  },
  data() {
    return {
      bgseed: 0,
      bgdirection: true,
    }
  },
  methods: {
    onResize() {
      this.generateBackground()
    },
    generateBackground() {
      const $fond = $(this.$el).find('.background')
      if(!$fond) return
      const pattern = Trianglify({ width: $fond.width(), height: $fond.height(), x_colors: colors[currentColorIndex], variance: 0.75 + (this.bgseed / 100), seed: 10 })
      pattern.canvas(this.$els.canvas)
    },
    animateBgData() {
      const animate = () => {
        if (this.bgdirection) this.bgseed++
        else this.bgseed--
        if (this.bgseed % 25 === 0) {
          this.bgdirection = !this.bgdirection
        }
        this.generateBackground()
        this._bgloopId = requestAnimationFrame(animate)
      }
      animate()
    },
  },
  ready() {
    this.animateBgData()
    Eventbus.$on('route:changed', () => { currentColorIndex = (currentColorIndex + 1) % colors.length })
  },
  destroyed() {
    cancelAnimationFrame(this._bgloopId)
    this._bgloopId = false
  }
}
