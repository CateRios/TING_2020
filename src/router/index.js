import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    // ---- Views
    {path: "/", component: () => import('../views/Index')},

    // ---- Components
    {path: "/login", component: () => import('../components/Login')},
    {path: "/roomHome", component: () => import('../components/Home'), meta: {requiresAuth: true}},
    {path: "*", component: () => import('../components/NotFound')}
];

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes
});
