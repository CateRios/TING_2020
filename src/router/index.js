import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
  { path: "/", component: "Landing" },
  { path: "/login", component: "Login" },
  { path: "/roomHome", component: "Home", meta: { requiresAuth: true } },
  { path: "/menu", component: "Menu" },
  { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes
});
