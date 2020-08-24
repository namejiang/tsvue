import Vue from "vue";
import { Store } from "vuex";
import VueRouter, { Route } from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
      $router: VueRouter;
      $route: Route;
      $store: Store<any>;
      $util: any;
      $req: any;
      HOST: string;
  }
}

// import Vue, { ComponentOptions } from "vue";
// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     metaInfo?: any;
//   }
// }
