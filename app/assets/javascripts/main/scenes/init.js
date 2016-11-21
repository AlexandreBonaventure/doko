import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from 'vuex/store'
// import { sync } from 'vuex-router-sync'

import App from './App.vue'

import routes from './routes'

const router = new VueRouter({
  routes,
})
// sync(store, router) // done.


// Now the app has started!
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  // store,
  render: (h) => h(App),
})
