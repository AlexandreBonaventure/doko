/**
 * VUE SETUP
 */

import Vue from 'vue'

/***********
 * PLUGINS *
 ***********/
import VueElementQuery from 'vue-element-query'
Vue.use(VueElementQuery)
import VueStash from 'vue-stash'
Vue.use(VueStash)



/**************
 * COMPONENTS *
 **************/
Vue.component('icon', require('vue/components/shared/ui/icon.vue'))
Vue.component('modal', require('vue/components/shared/ui/modal.vue'))
import bindDispatcher from 'vue/components/shared/system/bind-dispatcher.vue'
Vue.component('bindDispatcher', bindDispatcher)

// Vue.component('swapper', require('components/shared/ui/swapper.vue'))


/**************
 * DIRECTIVES *
 **************/
Vue.directive('embed-svg', require('vue/directives/embed-svg.js'))


/***********
 * FILTERS *
 ***********/


/***********
 * TRANSITIONS *
 ***********/

const isDev = process.env.NODE_ENV !== 'production'
if (isDev) {
  Vue.config.debug = true
}
Vue.config.debug = true
Vue.config.devtools = true
