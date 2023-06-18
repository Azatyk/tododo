<script lang="ts" setup>
import commonButton from '@/common/components/common-button.vue'
</script>

<template>
  <header class="layout-header">
    <span class="layout-header__logo">Tododo</span>
    <common-button>Something after</common-button>
  </header>
</template>

<style scoped>
.layout-header {
  padding: 24px 80px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--dark-color);
}

.layout-header__logo {
  color: var(--dark-color);
  font-size: 28px;
  font-weight: 500;
}
</style>
