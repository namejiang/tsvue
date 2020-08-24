<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { MetaInfo } from "../mixins/metaInfo";

@Component({
})
export default class Login extends MetaInfo {
    created() {
        this.setMetaInfo("Login");
    }
}
</script>
