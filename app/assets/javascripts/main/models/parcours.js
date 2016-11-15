import store from 'data-store'
import { cloneDeep } from 'lodash4'

export const Parcours = store.defineResource({
  name: 'parcours',
  endpoint: 'clients/parcours',
  // relations: {
  //   belongsTo: {
  //     client: {
  //       // localField is for linking relations
  //       // user.organization -> organization of the user
  //       localField: 'parcours',
  //       // localKey is the "join" field
  //       // the name of the field on a user that points to its parent organization
  //       foreignKey: 'client_id',
  //       // if you add this to a belongsTo relation
  //       // then js-data will attempt to use
  //       // a nested url structure, e.g. /organization/15/user/4
  //       parent: true,
  //     },
  //   },
  // },
  serialize(resourceConfig, data) {
    const nData = cloneDeep(data)
    nData.parcours.etapes_attributes = nData.parcours.etapes
    delete nData.parcours.etapes

    return nData
  },
  // deserialize(resourceConfig, { data }) {
  //   const nData = cloneDeep(data)
  //   nData.parcours.etapes = nData.parcours.etapes_attributes
  //   delete nData.parcours.etapes_attributes
  //
  //   return nData
  // },
})

store.registerModel('Inscription', Parcours)

export default Parcours
