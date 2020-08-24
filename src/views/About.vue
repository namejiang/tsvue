<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { MetaInfo } from "../mixins/metaInfo";

@Component
export default class About extends MetaInfo {
    created() {
        this.setMetaInfo("About");
    }
}
</script>
