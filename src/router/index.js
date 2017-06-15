import Hello from 'components/Hello'
import Router from 'vue-router'
import Vue from 'vue'
import apidetail from 'components/apidetail'
import apitest from 'components/apitest'
import foo from 'components/foo'
import good from 'components/good'
import user from 'components/user'
import world from 'components/world'

Vue.use(Router)

export default new Router({
    mode: "history",
    //scrollBehavior: () => ({ y: 0 }), //组件从头开始滚动
    routes: [{
            path: '/',
            name: '/',
            component: Hello
        }, {
            path: '/Hello',
            name: 'Hello',
            component: Hello
        }, {
            path: '/Hello/:id',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/world',
            name: 'world',
            component: world
        }, {
            path: '/good',
            name: 'good',
            component: good
        },
        {
            path: '/user',
            children: [{
                path: '/foo/:id',
                name: 'foo',
                component: foo
            }],
            name: 'user',
            component: user
        }, {
            path: '/apidetail/:id',
            name: 'apidetail',
            component: apidetail
        }

    ],
})