import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { //访问状态对象
    size: 100,
    sizes: 200,
    testshow: false,
}

const mutations = { //触发状态 同步
    jia(state, payload) { //载荷，说白了就是传的一个参数,payload是一个对象；
        state.size += payload.n;
    },
    jian(state) {
        state.size--;
    },
    // 显示/隐藏
    showsd(state) {
        state.testshow = !state.testshow;
    },

}

const getters = { //计算属性
    sizes: function(state) {
        return state.sizes + 1000;
    },
}

//action 异步 批处理触发
const actions = {
    jiaplus(context) {
        context.commit('jia', { n: 500 });
        // setInterval(()=>{
        //  context.commit('jian')
        // },1000);
    },
    jianplus({ commit }) {
        commit('jian')
    },

    showsd({ commit }) {
        commit('showsd');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})