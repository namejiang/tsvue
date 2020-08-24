import { RouteConfig } from "vue-router";

const admin: RouteConfig[] = [
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

admin.forEach((item) => {
    item.path = "/admin" + item.path;
    item.meta = {
        needLogin: true,
        layout: "admin",
    };
});

export default admin;
