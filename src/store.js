import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { //访问状态对象
    size: 100,
    sizes: 200,
    testshow: false,
    muconut: 8000,
    novel: [],
    //获取数据的写法
    //user: []

    //////////////////
    // orderList: [],
    // prama: {},

    alarm: [],


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
    //第二次
    active1(state) {
        state.muconut = 3000;
    },

    getBook(state, payload) {
        state.novel = payload.res;
        console.log(state.novel)
    },
    //获取数据的写法
    // getuser(state, payload) {
    //     state.user = payload.res;
    //     console.log(payload.res)
    // },

    ///////////////
    // updateOrderList(state, payload) {
    //     state.orderList = payload
    // },
    // //更新传的参数
    // updateParams(state, { key, val }) { //更新是在相应的方法里添加，this.$store.commit('updateParams',{key:,val:})
    //     state.params[key] = payload
    // }

    updateAlarm(state, payload) {
        state.alarm = payload
    },

}

const getters = { //计算属性
    sizes: function(state) {
        return state.sizes + 1000;
    },
    //////////////////
    // getOrderList: state => state.orderList, //将state里面的orderList赋值，值为getOrderList,页面访问的时候直接调用getOrderList

    getAlarms: state => state.alarm,

}

//action 异步 批处理触发
const actions = {
    /////////////////

    // fetchOrderList({ commit, state }) { //commit用来调用mutations ，注意：组件渲染时，页面里主动调用action的方法，在mounted里调用写法为：this.$store.dispatch('fetchOrderList')
    //     Vue.http.post('', state.params).then((res) => {
    //         commit('updateOrderList', res.data.list) //将获取的值赋值给updateOrderList
    //             // state.orderList = res.data.list  
    //             // state.total = res.data.total
    //     }, (err) => {
    //         console.log('请求出错了！')
    //     })
    // },


    //此处用的本地接口，请注意
    fetchAlarm({ commit, state }) {
        Vue.http.get('http://172.10.0.201/api/v1/accounts').then((res) => {
            commit('updateAlarm', res.body)
        }, (err) => {
            console.log('请求出错了')
        })
    },

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
    },

    // 请求接口实例
    getBook({ commit }) {
        Vue.http.jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8')
            .then(res => {
                commit({
                    type: 'getBook',
                    tag: 'novel',
                    res: res.body.books
                })
            })
    },
    //获取数据的写法
    // getuser({ commit }) {
    //     Vue.http.get('http://172.10.0.201/api/v1/accounts').then(res => {
    //         commit({
    //             type: 'getuser',
    //             res: res.body.datas
    //         })
    //     })
    // }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})