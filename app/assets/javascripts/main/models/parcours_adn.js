import store from 'data-store'

export const ParcoursAdn = store.defineResource({
  name: 'parcours-adn',
  endpoint: 'clients/parcours_adns',

})

store.registerModel('ParcoursAdn', ParcoursAdn)

export default ParcoursAdn
