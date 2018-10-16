import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloVue from '@/components/day01/HelloVue'
// import hhh from '@/components/day01/hhh'
// import example2 from '@/components/day02/example2'
import Index from '../views/index/index'
import Manage from '../views/Manage/index'
import TotalPrice from '../views/totalPrice/index'

Vue.use(Router)

export default new Router({
    routes: [
        //     {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // }, {
        //     path: '/day01/HelloVue',
        //     name: 'HelloVue',
        //     component: HelloVue
        // }, {
        //     path: '/day01/hhh',
        //     name: 'hhh',
        //     component: hhh
        // }, {
        //     path: '/day02/example2',
        //     name: 'example2',
        //     component: example2
        //     }


        // 首页
        {
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/Manage',
            name: 'Manage',
            component: Manage
        }, {
            path: '/totalPrice',
            name: 'TotalPrice',
            component: TotalPrice
        }
    ]
})