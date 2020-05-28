import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state";
import mutations from "@/store/mutations";

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state,
    mutations
})

export default store