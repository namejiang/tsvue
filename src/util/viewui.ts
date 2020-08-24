import { Layout, Header, Footer, Content, Sider, Button, Table, Input, Icon, MenuItem } from "view-design";
/**
 * [组件使用频繁就全局注册，无需一个页面一个页面引入]
 */
const components: any = {
  // 引入的组件添加到此对象中
  Layout, Header, Footer, Content, Sider, MenuItem,
  Button, Table, Input, Icon, 
};
let installed = false;
const install = (Vue: any, opts = {}) => {

  if (installed) { return; }
  installed = true;

  Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
  });

};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
  install,
  ...components,
};
