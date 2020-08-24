<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { MetaInfo } from "../mixins/metaInfo";

@Component
export default class Home extends MetaInfo {
    created() {
        this.setMetaInfo("Home1");
    }
}
</script>