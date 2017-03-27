import 'element-ui/lib/theme-default/index.css'

import App from './App'
import ElementUI from 'element-ui'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from 'store'
import vueresource from 'vue-resource'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
