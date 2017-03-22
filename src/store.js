import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const state = { //访问状态对象
//     counts: 44,
// }

// const mutations = { //触发状态 同步
//     jia(state, n) {
//         state.counts += n.a
//     },

//     jian(state) {
//         state.counts--
//     },
// }

// const getters = {
//     counts: function(state) {
//         return state.counts + 0;
//     }
// }

//action 异步 批处理触发

// const actions = {
//         jiaplus(context) {
//             context.commit('jia',{a:1});
//         },
//         jianplus({commit}){
//           commit('jian')
//         },
//  }

// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     //actions
// })