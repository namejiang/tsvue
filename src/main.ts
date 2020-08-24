import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HomeLayout from "./layout/home.vue";
import AdminLayout from "./layout/admin.vue";
import MetaInfo from "vue-meta-info";
import Component from "vue-class-component";
import "view-design/dist/styles/iview.css";
import ViewUI from "./util/viewui";
import GlobalComponent from "./util/GlobalComponent";
import req from "./util/req";
import util from "./util/util";
import "!less-loader!./app.less";

Vue.config.productionTip = false;
Vue.component("home-layout", HomeLayout);
Vue.component("admin-layout", AdminLayout);

Vue.use(MetaInfo);
Component.registerHooks([
    "metaInfo",
]);

Vue.use(ViewUI);
Vue.use(GlobalComponent);

Vue.prototype.HOST = "/api";
Vue.prototype.$req = req;
Vue.prototype.$util = util;


new Vue({
    router,
    store,
    render: (h:any) => h(App),
    mounted() {
        document.dispatchEvent(new Event("render-event"));
    },
}).$mount("#app");
