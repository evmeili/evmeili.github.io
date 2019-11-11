import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Find from '../pages/Find.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import Main from '../pages/Main.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import SeeMore from '../pages/Seemore.vue'

const routes = [{
    path: '/main',
    name: 'main',
    component: Main,
    children: [{
            path: 'home',
            name: 'home',
            component: Home
        }, {
            path: 'find',
            name: 'find',
            component: Find
        }, {
            path: 'order',
            name: 'order',
            component: Order
        }, {
            path: 'mine',
            name: 'mine',
            component: Mine
        },]
    
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/more',
        name: 'more',
        component: SeeMore
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },

    {
        path: '/',
        redirect: '/main/home'
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router