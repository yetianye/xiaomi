import 'normalize.css'
import 'font-awesome/css/font-awesome.css'

// import '!css-loader!../node_modules/font-awesome/css/font-awesome.css'
import Vuex from 'vuex'
import store from './store/store.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.less'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  // router,
  template: '<App/>',
  components: { App }
});

