
import Router from 'hype/router'
import { compact } from 'lodash4'

export default {
  data() {
    return {
      $router: Router,
    }
  },
  methods: {
    setState(state, params = Router.getRouteParams(), ...args) {
      Router.setState(state, params, ...args)
    },
    setParams(params = Router.getRouteParams(), ...args) {
      const mergedParams = Object.assign({}, Router.getRouteParams(), params)
      if (!compact(args).length) args = [Router.getQueryParams()]
      Router.setState(Router.getCurrentState(), mergedParams, ...args)
    },
    getUrlFromState(state, params, merge = true) {
      let query
      if (params && params.hasOwnProperty('query')) {
        query = params.query
        params = params.params || {}
      }
      if (merge) params = Object.assign({}, Router.getRouteParams(), params)
      const url = Router.getUrlFromState(state, params, query)
      return url ? `#${url}` : window.location.href
    },
    getUrlWithParams(params) {
      let query
      const state = Router.getCurrentState()
      if (params && params.hasOwnProperty('query')) {
        query = params.query
        params = params.params || {}
      }
      params = Object.assign({}, Router.getRouteParams(), params)
      const url = Router.getUrlFromState(state, params, query)
      return url ? `#${url}` : window.location.href
    },
  },
}
