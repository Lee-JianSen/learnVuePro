import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../views/Home/Home');
const Category = () => import('../views/Category/category');
const Cart = () => import('../views/Cart/cart');
const Mine = () => import('../views/Mine/mine');
const Detail = () => import('../views/detail/detail')
const routes = [
    {
        path: '',
        redirect: '/home',
        meta: {
            title:'home',
            keepAlive:true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title:'home',
            keepAlive:true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            title:'category',
            keepAlive:true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            title:'cart',
            keepAlive:true
        }
    },
    {
        path: '/mine',
        component: Mine,
        meta: {
            title:'mine',
            keepAlive:true
        }
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            title:'detail',
            keepAlive:false
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
