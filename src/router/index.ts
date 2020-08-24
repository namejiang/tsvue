import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import home from "./home";
import admin from "./admin";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
    ...home,
    ...admin,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
