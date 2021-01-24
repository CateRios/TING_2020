import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from "../../firebase";

const routes = [

    // ---- Views

    // Without authentication
    {path: "/", component: () => import('../views/Index')},
    {path: "/rooms", component: () => import('../views/Rooms')},

    // With authentication
    {path: "/access", component: () => import('../views/Access'), meta: {requiresAuth: true}},
    {path: "/menu", component: () => import('../views/Menu'), meta: {requiresAuth: true}},
    {path: "/order", component: () => import('../components/Order'), meta: {requiresAuth: true}},

    // ---- Components

    // Without authentication
    {path: "/login", component: () => import('../views/Login')},
    {path: "*", component: () => import('../views/NotFound')},



];

Vue.use(VueRouter);

 let router = new VueRouter({
    mode: "history",
     base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    if(requiresAuth) {
        auth.onAuthStateChanged( (user) => {
            if (!user) next('/login')
            else next();
        })
    } else next()
});

export default router
