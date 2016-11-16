import store from 'data-store'
import moment from 'moment'

export const Diffusion = store.defineResource({
  name: 'diffusion',
  endpoint: '/radio/diffusions',
  computed: {
    formatted_temps: ['temps', function (temps) {
      return moment.utc(temps * 1000).format('mm : ss')
    }],
  },
})

store.registerModel('Diffusion', Diffusion)

export default Diffusion
