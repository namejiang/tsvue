<template>
    <div id="app">
        <!--  -->
        <component :is="layout">
            <router-view v-if="isRouterAlive" />
        </component>
        <!--  -->
        <router-view v-if="!layout && isRouterAlive" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";

@Component({
})
export default class HelloWorld extends Vue {
    public defaultLayout: string = "home"; // 设置layout
    public isRouterAlive: boolean = true;

    @Provide() public reload: any = this.reloads;
    
    $route: any

    get layout() {
        return this.$route.meta.layout
            ? this.$route.meta.layout + "-layout"
            : "";
    }

    // 通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
    private reloads() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
            this.isRouterAlive = true;
        });
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
