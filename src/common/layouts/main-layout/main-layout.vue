<script lang="ts" setup>
import layoutHeader from './components/layout-header.vue'
</script>

<template>
  <div class="layout">
    <layout-header />
    <div class="layout__content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
}

.layout__content {
  padding: 40px 80px 0 80px;
  box-sizing: border-box;
  width: 100%;
}
</style>
