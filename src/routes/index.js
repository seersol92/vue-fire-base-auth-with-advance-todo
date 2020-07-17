import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Dashboard from '../components/Dashboard'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta : {
            requireAuth: true
        }
    }
]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requireAuth)) {

    }
});

export default router