import Vue from 'vue'
import Vuex from 'vuex'

import Banner from './components/banner.js'
import action from './action.js' 
import mutation from './mutation.js' 

Vue.use(Vuex);
const state = {
	Banner
}

export default new Vuex.Store({
	state,
	action,
	mutation
})