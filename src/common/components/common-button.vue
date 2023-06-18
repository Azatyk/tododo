<script lang="ts" setup>
import type { PropType } from 'vue'

defineProps({
  size: {
    type: String as PropType<'normal' | 'large'>
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <button class="common-button">
    <slot></slot>
    <i :class="['bx', { icon }]"></i>
  </button>
</template>

<style scoped>
.common-button {
  padding: 12px 20px;
  box-sizing: border-box;
  color: var(--dark-color);
  font-size: 15px;
  font-weight: 300;
  font-family: 'Criteria-CF', sans-serif;
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: transparent;
  cursor: pointer;
}
</style>
