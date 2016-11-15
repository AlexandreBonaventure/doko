import store from 'data-store'

export const Client = store.defineResource({
  name: 'client',
  endpoint: 'client',
  suffix: '.json',
  relations: {
    hasOne: {
      parcours: {
        // localField is for linking relations
        // user.organization -> organization of the user
        localField: 'parcours',
        // localKey is the "join" field
        // the name of the field on a user that points to its parent organization
        localKey: 'parcours_id',
        // if you add this to a belongsTo relation
        // then js-data will attempt to use
        // a nested url structure, e.g. /organization/15/user/4
      },
    },
  },
})

store.registerModel('client', Client)

export default Client
