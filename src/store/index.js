import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state";

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state
})

export default store