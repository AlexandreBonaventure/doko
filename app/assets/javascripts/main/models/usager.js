import store from 'data-store'

export const Usager = store.defineResource({
  name: 'usager',
  endpoint: 'radio/usagers',
})

store.registerModel('usager', Usager)

export default Usager
