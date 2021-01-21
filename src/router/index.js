import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    // ---- Views
    {path: "/", component: () => import('../views/Index')},
    {path: "/rooms", component: () => import('../views/Rooms')},
    {path: "/menu", component: () => import('../views/Menu')},

    // ---- Components
    {path: "/login", component: () => import('../components/Login')},
    {path: "/roomHome", component: () => import('../components/Home'), meta: {requiresAuth: true}},
    {path: "/order", component: () => import('../components/Order')},
    {path: "*", component: () => import('../components/NotFound')}
];

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes
});
